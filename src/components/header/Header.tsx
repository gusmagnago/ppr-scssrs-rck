import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/appContext';
import { AnimatedBet, HeaderWrapper } from './Header.styles';

const Header = () => {
  const { balance, bet, win } = useContext(AppContext);

  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (bet !== 0) {
      setAnimate(true);
      const timeout = setTimeout(() => {
        setAnimate(false);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [bet]);

  return (
    <HeaderWrapper>
      <div>
        <p>
          Balance: <span>{balance}</span>
        </p>
        {animate && (
          <AnimatedBet animateBetValue={animate}>
            <p>- 500</p>
          </AnimatedBet>
        )}
      </div>
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
