import { useContext } from 'react';
import {
  GameLetteringWrapper,
  Text,
  ComputerChoice,
  WinnerPoints,
  MainWinner,
} from './GameMessage.styles';
import { AppContext } from '../../context/appContext';

export const GameMessage = () => {
  const { selectedBet, computerChoice, winner, winnerMessage, bet } =
    useContext(AppContext);

  const generateWinnerPointsMessage = () => {
    if (selectedBet.includes(winner)) {
      if (selectedBet.length === 2) {
        return (
          <WinnerPoints>
            youn win <span>{bet * 3}</span>
          </WinnerPoints>
        );
      }
      return (
        <WinnerPoints>
          youn win <span>{bet * 14}</span>
        </WinnerPoints>
      );
    }
  };

  return (
    <GameLetteringWrapper bets={selectedBet}>
      {winnerMessage ? (
        <div>
          <MainWinner variant={winner}>{winnerMessage}</MainWinner>
          {generateWinnerPointsMessage()}
        </div>
      ) : selectedBet?.length ? (
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
  );
};
