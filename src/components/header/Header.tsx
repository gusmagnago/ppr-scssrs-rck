import { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { HeaderWrapper } from './Header.styles';

const Header = () => {
  const { balance, bet, win } = useContext(AppContext);

  return (
    <HeaderWrapper>
      <p>
        Balance: <span>{balance}</span>
      </p>
      <p>
        Bet: <span>{bet}</span>
      </p>
      <p>
        Win: <span> {win}</span>
      </p>
    </HeaderWrapper>
  );
};

export default Header;
