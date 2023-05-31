import { useContext } from 'react';

import { AppContext } from '../../context/appContext';
import { Play, PlayWrapper } from './PlayButton.styles';

export const PlayButton = () => {
  const {
    generateComputerBet,
    computerChoice,
    selectedBet,
    clearState,
    balance,
    playAgain,
  } = useContext(AppContext);

  const handlePlayGame = () => {
    if (balance) {
      if (computerChoice) {
        return clearState(selectedBet);
      }
      return generateComputerBet();
    }
    if (!computerChoice) {
      return generateComputerBet();
    }
    return playAgain(balance);
  };

  return (
    <PlayWrapper>
      <Play disabled={!selectedBet.length} onClick={handlePlayGame}>
        {balance && computerChoice
          ? 'Clear'
          : !balance && computerChoice
          ? 'Play Again'
          : 'Play'}
      </Play>
    </PlayWrapper>
  );
};
