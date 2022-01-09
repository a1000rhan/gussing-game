import React, { useState } from "react";

let number;

const rand = Math.floor(Math.random() * 100);
const geneSeek = [];
function Game() {
  const getInput = (v) => {
    number = +v;
  };

  const [clickBtn, setClickBtn] = useState("");
  const [trys, setTrys] = useState(4);

  const banishBtn = () => {
    console.log("random number: ", rand);
    console.log("enterd: ", number);
    setTrys(trys - 1);
    if (trys <= 4) {
      if (rand === number) {
        console.log("horry");
        return setClickBtn("Hoory Congrat");
      } else if (Math.abs(rand - number) > 10) {
        return setClickBtn("you are too far");
      } else {
        return setClickBtn("you are close ");
      }
    } else {
      setTrys(4);
      return alert("stop");
    }
  };

  const seekBtn = (inp) => {
    geneSeek.push(Math.abs(inp + 10));
    geneSeek.push(Math.abs(inp - 10));
    geneSeek.push(inp);
    geneSeek.push(Math.abs(inp + 15));
    geneSeek.push(Math.abs(inp - 15));

    console.log(geneSeek);
  };
  const getValuefromBtm = (val) => {
    console.log(val);
  };
  const seekWisdom = geneSeek.map((seek) => (
    <button onClick={() => getValuefromBtm(seek)} key={seek}>
      {seek}
    </button>
  ));
  const refresh = () => {
    window.location.reload(false);
  };
  const [seeking, setSeeking] = useState("");

  return (
    <div className="App-header">
      <h1>The Ancient Octowl</h1>
      <h2>
        stirs beneath the tumultuous waves, thinking of a number that will end
        the world
      </h2>
      <p>Find the secret number and use it to banish The Octowl</p>
      <p>Your invocation is too weak.</p>
      <p>That was so far off it banished some other unrelated elder beast!</p>
      <input
        placeholder="1-100"
        onChange={(e) => getInput(e.target.value)}
        type="number"
      ></input>
      <button onClick={banishBtn}>BANISH</button>
      <button onClick={refresh}>SURRENDER</button>
      <button onClick={() => seekBtn(rand)}>SEEK WISDOM</button>
      <div>{seekWisdom}</div>
      <p>{clickBtn}</p>
      <p>{trys} More Attempts Until The Octowl Awakens</p>
    </div>
  );
}

export default Game;
