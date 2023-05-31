import { useEffect, useState } from 'react';
import {
  Bet,
  Button,
  ButtonName,
  ButtonWrapper,
  ClearBetBtt,
} from './Player.styles';
import { PlayerProps } from './Player.types';

export const Player = ({
  variant,
  bet,
  onClick,
  disabled,
  clearBet,
}: PlayerProps) => {
  const [hasBet, setHasBet] = useState<number>(0);

  useEffect(() => {
    if (bet !== hasBet) {
      setHasBet(bet);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bet]);

  const handleClearBet = () => {
    clearBet(bet, variant);
    setHasBet((prevChosenBet) => prevChosenBet - 500);
  };

  return (
    <ButtonWrapper>
      <Button
        disabled={disabled}
        onClick={() => onClick(variant)}
        variant={variant}
      >
        {hasBet > 0 ? <Bet>{hasBet}</Bet> : null}
        <ButtonName>
          <span>{variant}</span>
        </ButtonName>
      </Button>
      {hasBet > 0 ? (
        <ClearBetBtt onClick={() => handleClearBet()}>clear bet</ClearBetBtt>
      ) : null}
    </ButtonWrapper>
  );
};
