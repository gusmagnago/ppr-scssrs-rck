import { createContext, ReactNode } from 'react';
import { GameContextType } from '../types/game';

type AppProviderProps = {
  children: ReactNode;
};

const initialState = {
  balance: 5000,
  bet: 500,
  win: 0,
  betRock: 0,
  betPaper: 0,
  betScissor: 0,
};

export const AppContext = createContext<GameContextType>(initialState);

export const AppProvider = ({ children }: AppProviderProps) => {
  const { balance, bet, betRock, betPaper, betScissor, win } = initialState;

  return (
    <AppContext.Provider
      value={{
        balance,
        bet,
        win,
        betRock,
        betPaper,
        betScissor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
