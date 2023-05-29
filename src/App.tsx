import { useContext, useEffect, useState } from 'react';
import Header from './components/header/Header';
import { AppContext, AppProvider } from './context/appContext';
import Player from './components/player/Player';
import { GameContextType } from './types/game';
import { PlayerVariantsTypes } from './components/player/Player.types';

function App() {
  const { betRock, balance, bet } = useContext(AppContext) as GameContextType;

  const [isBalance, setIsBalance] = useState<number>(balance);
  const [isBet, setIsBet] = useState<number>(0);
  const [isBetRock, setBetRock] = useState<number>(betRock);
  const [isBetPaper, setBetPaper] = useState<number>(0);
  const [isBetScissor, setBetScissor] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [win, setWin] = useState<number>(0);

  const [selectedBet, setSelectedBet] = useState<string[]>([]);

  useEffect(() => {
    if ((isBetRock || isBetPaper || isBetScissor) > 0) {
      setIsBalance(isBalance - bet);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBetPaper, isBetRock, isBetScissor, isBet]);

  const players: { variant: PlayerVariantsTypes; bet: number }[] = [
    { variant: 'rock', bet: isBetRock },
    { variant: 'paper', bet: isBetPaper },
    { variant: 'scissor', bet: isBetScissor },
  ];

  const handleSelect = (variant: string) => {
    if (isBalance && isBalance >= 500 && isBalance > 0) {
      const betSetter: Record<
        string,
        React.Dispatch<React.SetStateAction<number>>
      > = {
        rock: setBetRock,
        paper: setBetPaper,
        scissor: setBetScissor,
      };

      const selectedBetSetter = betSetter[variant];

      selectedBetSetter((prevBet: number) => prevBet + 500);
      setSelectedBet((prevSelectedBet: string[]) => {
        if (prevSelectedBet.includes(variant)) {
          return prevSelectedBet;
        }
        return [...prevSelectedBet, variant];
      });
      setIsBet((prevBetAmount) => prevBetAmount + bet);
    }
  };

  return (
    <AppProvider>
      <Header balance={isBalance} bet={isBet} win={win} />
      <p>Pick your positions</p>
      <div>
        {players.map(({ variant, bet }) => (
          <Player
            bet={bet}
            disabled={
              (!selectedBet.includes(variant) && selectedBet.length >= 2) ||
              isBalance === 0
            }
            key={`${variant}-bttn`}
            onClick={(e) => handleSelect(e)}
            variant={variant}
          />
        ))}
      </div>
      <button>Play</button>
    </AppProvider>
  );
}

export default App;
