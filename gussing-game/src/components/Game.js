import React, { useState } from "react";

let number;

const rand = Math.floor(Math.random() * 100);

let enterNum;
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
    if (number > 0 && number < 100) {
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
    } else {
      return setClickBtn("Invalid Number ! Enter From(1-100)");
    }
  };

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const [seeking, setSeeking] = useState([]);

  const seekBtn = () => {
    setSeeking([
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      rand,
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ]);
  };
  const getValuefromBtm = (val) => {
    enterNum = val;
    console.log(enterNum);
  };
  const seekWisdom = seeking.map((seek) => (
    <button onClick={() => getValuefromBtm(seek)} key={seek}>
      {seek}
    </button>
  ));
  const refresh = () => {
    window.location.reload(false);
  };

  return (
    <div className="App-header">
      <h1 className="title">The Ancient Octowl</h1>
      <h2>
        stirs beneath the tumultuous waves, thinking of a number that will end
        the world
      </h2>
      <p>Find the secret number and use it to banish The Octowl</p>
      <p>Your invocation is too weak.</p>
      <p>That was so far off it banished some other unrelated elder beast!</p>
      <input
        placeholder="1-100"
        autoFocus
        onChange={(e) => {
          if (enterNum == undefined) {
            getInput(e.target.value);
          } else {
            e.target.value = enterNum;
          }
        }}
        type="number"
      ></input>
      <button onClick={banishBtn}>BANISH</button>
      <button onClick={refresh}>SURRENDER</button>
      <button onClick={seekBtn}>SEEK WISDOM</button>
      <div>{shuffle(seekWisdom)}</div>
      <p>{clickBtn}</p>
      <p>{trys} More Attempts Until The Octowl Awakens</p>
    </div>
  );
}

export default Game;
