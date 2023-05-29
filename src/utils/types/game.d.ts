export type GameContextType = {
    balance: number;
    bet: number;
    betRock: number;
    betPaper: number;
    betScissor: number;
    win: number;
    selectedBet: string[];
    playElements: GameElements;
    handleSelect: (variant: string) => void;
};


export type GameElements = { variant: PlayerVariantsTypes; bet: number }[]