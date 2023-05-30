export type GameContextType = {
    balance: number;
    bet: number;
    betRock: number;
    betPaper: number;
    betScissor: number;
    win: number;
    selectedBet: string[];
    playElements: GameElements;
    computerChoice: string;
    winner: string;
    winnerMessage: string;
    handleSelect: (variant: string) => void;
    generateComputerBet: () => void;
    clearState: (betList: selectedBet[]) => void;
};



export type GameElements = { variant: PlayerVariantsTypes; bet: number }[];


export type Outcome = {
    condition: boolean;
    updateWin?: boolean;
    updateBalance: number;
    getWinner?: () => string | undefined;
    message: string | ((winner: string) => string);
};