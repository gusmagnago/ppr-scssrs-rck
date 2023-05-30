import { useContext } from 'react';

import { AppContext } from '../../context/appContext';
import { Play, PlayWrapper } from './PlayButton.styles';

export const PlayButton = () => {
  const { generateComputerBet, computerChoice, selectedBet, clearState } =
    useContext(AppContext);

  const handlePlayGame = () => {
    computerChoice ? clearState(selectedBet) : generateComputerBet();
  };

  return (
    <PlayWrapper>
      <Play disabled={!selectedBet.length} onClick={handlePlayGame}>
        {computerChoice ? 'Clear' : 'Play'}
      </Play>
    </PlayWrapper>
  );
};
