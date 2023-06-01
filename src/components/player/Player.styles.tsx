import { css, styled } from 'styled-components';
import { PlayerStylingProps } from './Player.types';
import { palette, viewPort } from '../../theme/theme';

const opacity = 40;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant',
})<PlayerStylingProps>`
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 120px;
  margin-right: 15px;

  @media (${viewPort.small}) {
    width: 110px;
    height: 105px;
  }

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
  padding: 20px;

  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`;

export const ButtonName = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 15px;
  width: 100%;
  font-size: 20px;

  @media (${viewPort.small}) {
    font-size: 10px;
  }
`;

export const ClearBetBtt = styled.button`
  background-color: ${palette.black};
  border: 3px solid ${palette.gold};
  border-radius: 50px;
  color: ${palette.gold};
  padding: 5px 10px;
  margin-top: 10px;
`;
