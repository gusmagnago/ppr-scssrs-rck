import { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { Player } from '../player/Player';

export const Game = () => {
  const { balance, selectedBet, playElements, handleSelect } =
    useContext(AppContext);

  return (
    <div>
      <p>Pick your positions</p>
      {playElements.map(({ variant, bet }) => (
        <Player
          bet={bet}
          disabled={
            (selectedBet &&
              !selectedBet.includes(variant) &&
              selectedBet.length >= 2) ||
            balance === 0
          }
          key={`${variant}-bttn`}
          onClick={(e) => handleSelect(e)}
          variant={variant}
        />
      ))}
    </div>
  );
};
