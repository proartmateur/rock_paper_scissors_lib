const {RockPaperScissors} = require("./paper_scrisors_rock.js");
const game = new RockPaperScissors(true);
const res = game.start("rock");
console.log(res);
