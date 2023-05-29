import { useContext } from 'react';
import { AppContext } from '../../context/appContext';

const Header = () => {
  const { balance, bet, win } = useContext(AppContext);

  return (
    <div>
      <p>
        <span>Balance: {balance}</span>
      </p>
      <p>
        <span>Bet: {bet}</span>
      </p>
      <p>
        <span>Win: {win}</span>
      </p>
    </div>
  );
};

export default Header;
