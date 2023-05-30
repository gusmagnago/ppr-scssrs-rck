import styled, { css } from 'styled-components';
import { palette } from '../../theme/palette';
import { GameStylingProps } from './GameMessage.types';

export const GameLetteringWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'bets',
})<GameStylingProps>`
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
        `}
`;

export const Text = styled.span`
  color: ${palette.gold};
  margin: 0 30px;
`;

export const ComputerChoice = styled.span`
  color: ${palette.white};
`;

export const MainWinner = styled.p<GameStylingProps>`
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

export const WinnerPoints = styled.div`
  color: ${palette.gold};
  text-transform: uppercase;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin-left: 15px;
    color: ${palette.white};
    font-size: inherit;
  }
`;
