import { Bet, Button, ButtonName } from './Player.styles';
import { PlayerProps } from './Player.types';

export const Player = ({ variant, bet, onClick, disabled }: PlayerProps) => {
  return (
    <>
      <Button
        disabled={disabled}
        onClick={() => onClick(variant)}
        variant={variant}
      >
        {bet > 0 && <Bet>{bet}</Bet>}
        <ButtonName>
          <span>{variant}</span>
        </ButtonName>
      </Button>
    </>
  );
};
