import { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { Player } from '../player/Player';
import { GameWrapper, PlayerWrapper } from './Game.styles';
import { GameMessage } from '../game-message/GameMessage';

export const Game = () => {
  const {
    balance,
    selectedBet,
    playElements,
    handleSelect,
    computerChoice,
    clearBet,
  } = useContext(AppContext);

  return (
    <GameWrapper>
      <GameMessage />
      <PlayerWrapper>
        {playElements.map(({ variant, bet }) => (
          <Player
            bet={bet}
            disabled={
              (selectedBet &&
                !selectedBet.includes(variant) &&
                selectedBet.length >= 2) ||
              balance === 0 ||
              !!computerChoice
            }
            key={`${variant}-bttn`}
            onClick={() => handleSelect(variant)}
            variant={variant}
            clearBet={() => clearBet(bet, variant)}
          />
        ))}
      </PlayerWrapper>
    </GameWrapper>
  );
};
