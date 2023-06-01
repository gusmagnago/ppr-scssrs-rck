import { styled } from 'styled-components';
import { palette, viewPort } from '../../theme/theme';

export const PlayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  @media (${viewPort.small}) {
    margin-top: 0;
  }
`;

export const Play = styled.button`
  background-color: ${palette.black};
  border: 3px solid ${palette.gold};
  border-radius: 50px;
  width: 150px;
  font-size: 20px;
  padding: 20px;
  margin: 40px;
  color: ${palette.gold};
  padding: 20px;
  margin: 40px;

  @media (${viewPort.small}) {
    width: 100px;
    font-size: 15px;
    padding: 10px;
    margin: 10px;
  }
`;
