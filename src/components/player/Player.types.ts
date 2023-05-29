export type PlayerVariantsTypes = 'paper' | 'scissor' | 'rock';

export interface PlayerProps {
    variant: PlayerVariantsTypes;
    bet: number;
    onClick: (variant: PlayerVariantsTypes) => void;
    disabled?: boolean;
}

export type PlayerStylingProps = Pick<PlayerProps, 'variant'>