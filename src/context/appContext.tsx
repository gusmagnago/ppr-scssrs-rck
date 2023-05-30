import { createContext, ReactNode, useEffect, useState } from 'react';
import { GameContextType, GameElements, Outcome } from '../utils/types/game';

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
  winner: '',
  winnerMessage: '',
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
  const [winnerMessage, setWinnerMessage] = useState<string>('');
  const [winner, setWinner] = useState<string>('');

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
      setWinnerMessage('');
    }
  };

  const winAgainstComputer = (
    userBet: string[],
    computerBet: string
  ): boolean => {
    return (
      (userBet.includes('rock') && computerBet === 'scissor') ||
      (userBet.includes('paper') && computerBet === 'rock') ||
      (userBet.includes('scissor') && computerBet === 'paper')
    );
  };

  const findWinner = (
    userBet: string[],
    computerBet: string
  ): string | undefined => {
    if (userBet.includes('rock') && computerBet === 'scissor') {
      return 'rock';
    }
    if (userBet.includes('paper') && computerBet === 'rock') {
      return 'paper';
    }
    if (userBet.includes('scissor') && computerBet === 'paper') {
      return 'scissor';
    }
  };

  const calculateResult = (userBets: string[], compBet: string) => {
    setTimeout(() => {
      const outcomes: Outcome[] = [
        {
          condition: userBets.includes(compBet),
          message: "It's a tie",
          updateBalance: 0,
        },
        {
          condition:
            userBets.length === 1 && winAgainstComputer(userBets, compBet),
          updateWin: true,
          updateBalance: 14,
          getWinner: () => userBets[0],
          message: (winner: string) => `${winner} WON`,
        },
        {
          condition:
            userBets.length === 2 && winAgainstComputer(userBets, compBet),
          updateWin: true,
          updateBalance: 3,
          getWinner: () => findWinner(userBets, compBet),
          message: (winner: string) => `${winner} won`,
        },
        {
          condition: true,
          getWinner: () => compBet,
          message: `${compBet} WON`,
          updateBalance: 0,
        },
      ];

      const outcome = outcomes.find((o) => o.condition);
      if (outcome) {
        if (outcome.updateWin) {
          setWin((prevWin) => prevWin + 1);
        }
        if (outcome.updateBalance) {
          setBalance((prevBalance) => prevBalance * outcome.updateBalance);
        }
        const winner = outcome.getWinner ? outcome.getWinner() : undefined;
        setWinner(winner!);
        const message =
          typeof outcome.message === 'function'
            ? outcome.message(winner!)
            : outcome.message;
        setWinnerMessage(message);
      }
    }, 1000);
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
    winner,
    winnerMessage,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};
