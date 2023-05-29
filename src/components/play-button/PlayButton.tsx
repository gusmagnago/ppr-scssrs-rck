import { useContext, useEffect, useState } from 'react';

import { AppContext } from '../../context/appContext';

export const PlayButton = () => {
  const { selectedBet, playElements } = useContext(AppContext);

  const [computerChoice, setComputerChoice] = useState<string>('');

  useEffect(() => {
    if (computerChoice) {
      calculateResult(selectedBet, computerChoice);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [computerChoice, selectedBet]);

  const generateComputerBet = () => {
    const randomizer = Math.floor(Math.random() * playElements.length);
    const computer = playElements[randomizer].variant;
    setComputerChoice(computer);
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
      return console.log('YOU WIN 14X YOUR BET');
    }
    if (userBets.length === 2 && winAgainstComputer(userBets[0], compBet)) {
      return console.log('YOU WIN ONLY 3X YOUR BET');
    }
    return console.log('YOU L0SE');
  };

  const handlePlayGame = () => {
    generateComputerBet();
  };

  return (
    <div>
      <button onClick={handlePlayGame}>
        {computerChoice ? 'Clear' : 'Play'}
      </button>
    </div>
  );
};
