import styled, { css } from 'styled-components';
import { palette, viewPort } from '../../theme/theme';
import { GameMessageStylingProps } from './GameMessage.types';

export const GameLetteringWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'bets',
})<GameMessageStylingProps>`
  ${({ bets }) =>
    bets?.length
      ? css`
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 50px;
          height: 100%;
        `
      : css`
          color: ${palette.gold};
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          height: inherit;
          margin-bottom: 30px;

          @media (${viewPort.small}) {
            margin-bottom: 10px;
          }
        `}
`;

export const Text = styled.span`
  color: ${palette.gold};
  margin: 0 30px;
`;

export const Bet = styled.span`
  color: ${palette.white};
`;

export const MainWinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainWinner = styled.p<GameMessageStylingProps>`
  color: ${({ variant }) => {
    switch (variant) {
      case 'paper':
        return css`
          ${palette.paper};
        `;
      case 'scissor':
        return css`
          ${palette.scissor};
        `;
      case 'rock':
        return css`
          ${palette.rock};
        `;
      default:
        return css`
          ${palette.white}
        `;
    }
  }};
`;

export const InfoText = styled.p`
  @media (${viewPort.small}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const WinnerPoints = styled.div`
  color: ${palette.gold};
  text-transform: uppercase;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin: 0 15px;
    color: ${palette.white};
    font-size: inherit;
  }
`;
