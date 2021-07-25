import {RockPaperScissors} from "../index";


test("should be true",()=>{
    const r = new RockPaperScissors(true);
    const res = r.start('rock');
    console.log(res);
    expect(true).toEqual(true);
});

test("should win player 1",()=>{
    const r = new RockPaperScissors(false);
    const res = r.start('rock','scissors');
    //console.log(res);
    expect('player_1').toEqual(res.winner);
});

test("should win player 2",()=>{
    const r = new RockPaperScissors(false);
    const res = r.start('paper','scissors');
    //console.log(res);
    expect('player_2').toEqual(res.winner);
});

test("should not win",()=>{
    const r = new RockPaperScissors(false);
    const res = r.start('paper','paper');
    console.log(res);
    expect('nobody').toEqual(res.winner);
});
