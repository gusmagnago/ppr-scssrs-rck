export type PlayerVariantsTypes = 'paper' | 'scissor' | 'rock';

export interface PlayerProps {
    variant: PlayerVariantsTypes;
    bet: number;
    onClick: (variant: PlayerVariantsTypes) => void;
    disabled?: boolean;
    clearBet: (bet: number, variant: string) => void;
}

export type PlayerStylingProps = Pick<PlayerProps, 'variant'>