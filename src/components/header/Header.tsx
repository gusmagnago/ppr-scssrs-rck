interface HeaderTypes {
  balance: number;
  bet: number;
  win: number;
}

const Header = ({ balance, bet, win }: HeaderTypes) => {
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
