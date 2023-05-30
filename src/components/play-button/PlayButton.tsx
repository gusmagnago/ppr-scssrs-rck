import { useContext } from 'react';

import { AppContext } from '../../context/appContext';

export const PlayButton = () => {
  const { generateComputerBet, computerChoice, selectedBet, clearState } =
    useContext(AppContext);

  const handlePlayGame = () => {
    computerChoice ? clearState(selectedBet) : generateComputerBet();
  };

  return (
    <div>
      <button disabled={!selectedBet.length} onClick={handlePlayGame}>
        {computerChoice ? 'Clear' : 'Play'}
      </button>
    </div>
  );
};
