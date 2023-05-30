import { createContext, ReactNode, useEffect, useState } from 'react';
import { GameContextType, GameElements } from '../utils/types/game';

type AppProviderProps = {
  children: ReactNode;
};

const initialState = {
  balance: 5000,
  bet: 0,
  win: 0,
  betRock: 0,
  betPaper: 0,
  betScissor: 0,
  selectedBet: [],
  playElements: [{ variant: '', bet: 0 }],
  computerChoice: '',
  handleSelect: () => {},
  generateComputerBet: () => {},
  clearState: () => {},
};

export const AppContext = createContext<GameContextType>(initialState);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [balance, setBalance] = useState<number>(initialState.balance);
  const [bet, setBet] = useState<number>(initialState.bet);
  const [betRock, setBetRock] = useState<number>(initialState.betRock);
  const [betPaper, setBetPaper] = useState<number>(initialState.betPaper);
  const [betScissor, setBetScissor] = useState<number>(initialState.betScissor);
  const [selectedBet, setSelectedBet] = useState<string[]>([]);
  const [win, setWin] = useState<number>(initialState.win);
  const [computerChoice, setComputerChoice] = useState<string>('');

  useEffect(() => {
    if (betRock > 0 || betPaper > 0 || betScissor > 0) {
      setBalance((prevBalance) => prevBalance - 500);
    }
  }, [betRock, betPaper, betScissor]);

  useEffect(() => {
    if (computerChoice) {
      calculateResult(selectedBet, computerChoice);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [computerChoice, selectedBet]);

  const playElements: GameElements = [
    { variant: 'rock', bet: betRock },
    { variant: 'paper', bet: betPaper },
    { variant: 'scissor', bet: betScissor },
  ];

  const handleSelect = (variant: string) => {
    if (balance >= 500 && balance > 0) {
      const betSetter: Record<
        string,
        React.Dispatch<React.SetStateAction<number>>
      > = {
        rock: setBetRock,
        paper: setBetPaper,
        scissor: setBetScissor,
      };

      const selectedBetSetter = betSetter[variant];

      selectedBetSetter((prevBet) => prevBet + 500);
      setSelectedBet((prevSelectedBet) => {
        if (prevSelectedBet?.includes(variant)) {
          return prevSelectedBet;
        }
        return [...prevSelectedBet!, variant];
      });
      setBet((prevBetAmount) => prevBetAmount + 500);
    }
  };

  const generateComputerBet = () => {
    const randomizer = Math.floor(Math.random() * playElements.length);
    const computer = playElements[randomizer].variant;
    setComputerChoice(computer);
  };

  const clearState = (betList: string[]) => {
    if (betList.length > 0) {
      setSelectedBet([]);
      setBet(0);
      setBetRock(0);
      setBetPaper(0);
      setBetScissor(0);
      setComputerChoice('');
    }
  };

  const winAgainstComputer = (
    userBet: string,
    computerBet: string
  ): boolean => {
    return (
      (userBet === 'rock' && computerBet === 'scissor') ||
      (userBet === 'paper' && computerBet === 'rock') ||
      (userBet === 'scissor' && computerBet === 'paper')
    );
  };

  const calculateResult = (userBets: string[], compBet: string) => {
    if (userBets.includes(compBet)) {
      return console.log('TIE');
    }
    if (userBets.length === 1 && winAgainstComputer(userBets[0], compBet)) {
      console.log('YOU WIN 14X YOUR BET');
      setWin((prevWin) => prevWin + 1);
      setBalance((prevBalance) => prevBalance * 14);
    }
    if (userBets.length === 2 && winAgainstComputer(userBets[0], compBet)) {
      console.log('YOU WIN ONLY 3X YOUR BET');
      setWin((prevWin) => prevWin + 1);
      setBalance((prevBalance) => prevBalance * 3);
    }
    return console.log('YOU L0SE');
  };

  const contextValues: GameContextType = {
    balance,
    bet,
    win,
    betRock,
    betPaper,
    betScissor,
    selectedBet,
    playElements,
    computerChoice,
    handleSelect,
    generateComputerBet,
    clearState,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};
