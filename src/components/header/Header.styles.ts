import { styled } from 'styled-components';
import { palette } from '../../theme/palette';

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
