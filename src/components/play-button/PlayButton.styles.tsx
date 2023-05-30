import { styled } from 'styled-components';
import { palette } from '../../theme/palette';

export const PlayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const Play = styled.button`
  background-color: ${palette.black};
  border: 3px solid ${palette.gold};
  border-radius: 50px;
  width: 150px;
  font-size: 20px;
  color: ${palette.gold};
  padding: 20px;
  margin: 40px;
`;
