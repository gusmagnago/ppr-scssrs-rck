import { styled } from 'styled-components';
import { palette } from '../../theme/theme';
import { StylingBalance } from './Header.types';

export const HeaderWrapper = styled.div`
  background-color: ${palette.black};
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: ${palette.gold};
  padding: 5px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  & > p {
    margin: 0 10px;
  }

  span {
    color: ${palette.white};
  }
`;

export const AnimatedBet = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'animateBetValue',
}) <StylingBalance>`
  position: absolute;
  margin-left: 80px;
  z-index: 1000;
  animation: ${({ animateBetValue }) =>
    animateBetValue
      ? `animateKeyFrames 0.9s both;`
      : 'none'};

@keyframes animateKeyFrames {
  0% {
    transform: translateY(-30px);
    opacity: 1;
  }
  70% {
     transform: translateY(-15px);
  }
  50% {
      transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
    opacity: 0;
  }
}
`;

