import { GameElements } from '../../utils/types/game';

export interface GameTypes {
  playElements: GameElements;
  selectedBet: string[];
  balance: number;
  handleSelect: (variant: string) => void;
}
