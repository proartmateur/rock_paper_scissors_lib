export class RockPaperScissors {
    private player1_choice: string;
    private player2_choice: string;
    private player2_is_computer: boolean;

    private choices: Array<string>;

    constructor(player2_is_computer: boolean) {
        this.player2_is_computer = player2_is_computer;
        this.choices = ["rock", "paper", "scissors"];
    }

    start(player1_choice: string, player2_choice: string = ""): { winner: string, player_1: string, player_2: string } {
        this.player1_choice = player1_choice;
        if (this.player2_is_computer) {
            this.generateComputerChoice();
        } else {
            this.player2_choice = player2_choice;
        }
        return this.getResults();

    }

    private generateComputerChoice() {
        const random_number = Math.floor(Math.random() * 3);
        this.player2_choice = this.choices[random_number];
    }

    private getResults(): { winner: string, player_1: string, player_2: string } {
        let res = "";
        const rock = this.choices[0];
        const paper = this.choices[1];
        const scissors = this.choices[2];

        if (this.player1_choice === this.player2_choice) {
            return this.formatResult("nobody");
        }

        const choices = `${this.player1_choice}_${this.player2_choice}`;

        switch (choices) {
            case `${paper}_${rock}`:
            case `${rock}_${scissors}`:
            case `${scissors}_${paper}`:
                res = `player_1`;
                break
            case `${rock}_${paper}`:
            case `${scissors}_${rock}`:
            case `${paper}_${scissors}`:
                res = `player_2`;
                break
        }

        return this.formatResult(res);
    }

    private formatResult(winner: string): { winner: string, player_1: string, player_2: string } {
        return {winner, player_1: this.player1_choice, player_2: this.player2_choice};
    }
}

