import { PlayerProps } from './Player.types';

export const Player = ({ variant, bet, onClick, disabled }: PlayerProps) => {
  return (
    <div>
      <button onClick={() => onClick(variant)} disabled={disabled}>
        {bet > 0 && (
          <div>
            <span>{bet}</span>
          </div>
        )}
        {variant}
      </button>
    </div>
  );
};
