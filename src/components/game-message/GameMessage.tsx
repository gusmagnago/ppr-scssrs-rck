import { useContext } from 'react';
import {
  GameLetteringWrapper,
  Text,
  WinnerPoints,
  MainWinner,
  Bet,
  MainWinnerWrapper,
  InfoText,
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
    return (
      <WinnerPoints>
        you lose <span>{bet}</span> of your balance
      </WinnerPoints>
    );
  };

  return (
    <GameLetteringWrapper bets={selectedBet}>
      {winnerMessage ? (
        <MainWinnerWrapper>
          <MainWinner variant={winner}>{winnerMessage}</MainWinner>
          {generateWinnerPointsMessage()}
        </MainWinnerWrapper>
      ) : selectedBet?.length ? (
        <InfoText>
          {selectedBet.length > 1 ? (
            <>
              <Bet>{selectedBet[0]}</Bet>
              <Text>&</Text>
              <Bet>{selectedBet[1]}</Bet>
              <Text>vs</Text>
              <Bet>{computerChoice}</Bet>
            </>
          ) : (
            <>
              <Bet>{selectedBet[0]}</Bet>
              <Text>vs</Text>
              <Bet>{computerChoice}</Bet>
            </>
          )}
        </InfoText>
      ) : (
        <p>Pick your positions</p>
      )}
    </GameLetteringWrapper>
  );
};
