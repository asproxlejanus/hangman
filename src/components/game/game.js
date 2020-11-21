import React, { useEffect, useState } from "react";
import styled from "styled-components";
import alphabet from "./lib/alphabet";
import fruits from "./lib/fruits";

const style = {
  alphabetContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  wordWrapper: {
    margin: 5,
    width: 60,
    height: 60,
  },
};

const GamePlay = ({ setScore, score }) => {
  const [randonWord, setRandonWord] = useState("banana");
  const [renderedWord, setRenderedWord] = useState([]);
  const [renderedAlphabet, setRenderedAlphabet] = useState([...alphabet]);
  const [points, setPoints] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [gameWin, setGameWin] = useState(false);

  const FRUITSLENGHT = fruits.length;

  const getRandonWord = (word) => {
    let tempWord = word.split("").map((item, index) => {
      if (item === " ") {
        return [index, " - "];
      } else {
        return [index, "*"];
      }
    });
    return tempWord;
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    setRandonWord(fruits[getRandomNumber(0, FRUITSLENGHT)]);
  }, []);

  useEffect(() => {
    setRenderedWord(getRandonWord(randonWord));
  }, [randonWord]);

  useEffect(() => {
    let tempRenderedWord = renderedWord.map((item) => {
      if (item[1] === "*") return item[1];
    });
    if (renderedWord.length !== 0) {
      if (tempRenderedWord.join("").indexOf("*") < 0) {
        setGameWin(true);
        setScore({ ...score, wins: score.wins + 1 });
      }
    }
  }, [renderedWord]);

  useEffect(() => {
    if (points === 0) {
      setGameOver(true);
      setScore({ ...score, lose: score.lose + 1 });
    }
  }, [points]);

  const pickedWord = (value) => {
    let choosedWord = randonWord.split("");
    let newAlphabet = renderedAlphabet;
    let newRenderedWord = [...renderedWord];

    if (randonWord.indexOf(value) < 0) {
      setPoints(points - 1);
      renderedAlphabet.forEach((item, index) => {
        if (item.key === value) {
          newAlphabet[index] = { key: value, picked: true, status: false };
        }
      });
    } else {
      renderedAlphabet.forEach((item, index) => {
        if (item.key === value) {
          newAlphabet[index] = {
            key: value,
            picked: true,
            status: true,
          };
        }
      });
    }

    choosedWord.forEach((item, index) => {
      if (item === value) {
        newRenderedWord[index] = [index, value];
        setRenderedWord(newRenderedWord);
      }
    });

    setRenderedAlphabet(newAlphabet);
  };

  const newGame = () => {
    setGameOver(false);
    console.log(fruits[getRandomNumber(0, FRUITSLENGHT)]);
    setRandonWord(fruits[getRandomNumber(0, FRUITSLENGHT)]);
    setPoints(5);
    setRenderedAlphabet([...alphabet]);
    setGameWin(false);
  };

  return (
    <>
      {(gameWin || gameOver) && (
        <PopUp onNewGame={newGame}>
          {gameWin ? "You're a winner baby" : "You're a Loser"}
        </PopUp>
      )}
      <div className="ui segments">
        <div className="ui segment">
          <div className="ui grid">
            <div className="five wide column">
              <p>Opportunities left: {points}</p>
            </div>
          </div>
        </div>
        <div className="ui segment">
          <h4 style={{ textAlign: "center" }}>The randon word picked is!</h4>
          <br />
          <br />
          <div className="ui grid centered">
            {renderedWord.map((item, index) => {
              return (
                <div key={index} className="one wide column">
                  <h3>{item[1].toUpperCase()}</h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ui segment">
          <h4>Choose a word:</h4>
          <br />
          <br />
          <div style={style.alphabetContainer}>
            {renderedAlphabet.map((item, index) => {
              return (
                <div
                  key={index}
                  className="one wide column"
                  style={style.wordWrapper}
                  onClick={!item.picked ? () => pickedWord(item.key) : null}
                >
                  <button
                    className={
                      item.picked
                        ? item.status
                          ? "ui blue green button"
                          : "ui red button"
                        : "ui blue basic button"
                    }
                    disabled={item.picked}
                  >
                    <h3>{item.key.toUpperCase()}</h3>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="ui segment">
          <p>Middle</p>
        </div>
        <div className="ui segment">
          <p>Bottom</p>
        </div>
      </div>
    </>
  );
};

export default GamePlay;

const PopUp = ({ children, onNewGame }) => {
  const PopUpContainer = styled.div`
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 40;
  `;
  const StyledPopUp = styled.div`
    position: fixed;
    height: 150px;
    width: 300px;
    top: 20%;
    left: 0px;
    right: 0px;
    margin: auto;
    z-index: 50;
  `;
  return (
    <PopUpContainer>
      <StyledPopUp>
        <div
          className="ui segment"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h4 style={{ textAlign: "center" }}>{children}</h4>
          <button
            style={{ margin: "auto" }}
            onClick={() => onNewGame()}
            className="ui button primary"
          >
            New Game
          </button>
        </div>
        {/*       if (gameOver) return (
      <div
        className="ui segment"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h4 style={{ textAlign: "center" }}>You loser!</h4>
        <button
          style={{ margin: "auto" }}
          onClick={() => newGame()}
          className="ui button primary"
        >
          Try Again
        </button>
      </div>
      ); if (gameWin) return (
      <div
        className="ui segment"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h4 style={{ textAlign: "center" }}>
          Congratulations! You're a winner!
        </h4>
        <button
          style={{ margin: "auto" }}
          onClick={() => newGame()}
          className="ui button primary"
        >
          New Game
        </button>
      </div> 
      ); */}
      </StyledPopUp>
    </PopUpContainer>
  );
};
