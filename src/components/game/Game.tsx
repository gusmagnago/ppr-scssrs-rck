import { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { Player } from '../player/Player';
import {
  ComputerChoice,
  GameLetteringWrapper,
  GameWrapper,
  PlayerWrapper,
  Text,
} from './Game.styles';
import { GameStylingProps } from './Game.types';

export const Game = ({ bets }: GameStylingProps) => {
  const { balance, selectedBet, playElements, handleSelect, computerChoice } =
    useContext(AppContext);

  return (
    <GameWrapper>
      <GameLetteringWrapper bets={selectedBet} {...bets}>
        {selectedBet?.length ? (
          <p>
            {selectedBet.length > 1 ? (
              <>
                {selectedBet[0]}
                <Text>&</Text> {selectedBet[1]}
                <Text>vs</Text>
                <ComputerChoice>{computerChoice}</ComputerChoice>
              </>
            ) : (
              <>
                {selectedBet[0]}
                <Text>vs</Text>
                <ComputerChoice>{computerChoice}</ComputerChoice>
              </>
            )}
          </p>
        ) : (
          <p>Pick your positions</p>
        )}
      </GameLetteringWrapper>
      <PlayerWrapper>
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
            onClick={() => handleSelect(variant)}
            variant={variant}
          />
        ))}
      </PlayerWrapper>
    </GameWrapper>
  );
};
