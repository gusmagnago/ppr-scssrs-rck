import { css, styled } from 'styled-components';
import { palette } from '../../theme/palette';
import { GameStylingProps } from './Game.types';

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin-top: 200px;
`;

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const GameLetteringWrapper = styled.div<GameStylingProps>`
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
          p {
            color: ${palette.white};
          }
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
