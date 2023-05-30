import { css, styled } from 'styled-components';
import { PlayerStylingProps } from './Player.types';
import { palette } from '../../theme/palette';

const opacity = 40;

export const Button = styled.button<PlayerStylingProps>`
  border-radius: 5px;
  width: 150px;
  height: 120px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 15px;

  ${({ variant }) => {
    switch (variant) {
      case 'paper':
        return css`
          background-color: ${palette.paper + opacity};
          border: 3px solid ${palette.paper};
          color: ${palette.paper};
        `;
      case 'scissor':
        return css`
          background-color: ${palette.scissor + opacity};
          border: 3px solid ${palette.scissor};
          color: ${palette.scissor};
          margin-right: 0;
        `;
      case 'rock':
        return css`
          background-color: ${palette.rock + opacity};
          border: 3px solid ${palette.rock};
          color: ${palette.rock};
        `;
      default:
        return;
    }
  }}
`;

export const Bet = styled.div`
  border: 3px solid ${palette.betBorder};
  background-color: ${palette.white};
  border-radius: 50%;
  margin-right: 0;
  color: ${palette.black};
  padding: 5px;

  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const ButtonName = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 15px;
  width: 100%;
  font-size: 20px;
`;
