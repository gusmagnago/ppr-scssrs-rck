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
  handleSelect: () => {},
};

export const AppContext = createContext<GameContextType>(initialState);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [balance, setBalance] = useState<number>(5000);
  const [bet, setBet] = useState<number>(initialState.bet);
  const [betRock, setBetRock] = useState<number>(initialState.betRock);
  const [betPaper, setBetPaper] = useState<number>(initialState.betPaper);
  const [betScissor, setBetScissor] = useState<number>(initialState.betScissor);
  const [win, setWin] = useState<number>(initialState.win);
  const [selectedBet, setSelectedBet] = useState<string[]>([]);

  useEffect(() => {
    if (betRock > 0 || betPaper > 0 || betScissor > 0) {
      setBalance((prevBalance) => prevBalance - 500);
    }
  }, [betRock, betPaper, betScissor]);

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

  const contextValues: GameContextType = {
    balance,
    bet,
    win,
    betRock,
    betPaper,
    betScissor,
    selectedBet,
    playElements,
    handleSelect,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};
