import React, { useState } from "react";
import Gameplay from "./components/game/game";
import UserProfile from "./components/avatar/avatar";
import { Dropdown } from "./components/dropdown/dropdown";
import styled from "styled-components";

const GameStartWrapper = styled.div`
  position: fixed;
  top: 20%;
  left: 0px;
  right: 0px;
  margin: auto;
  width: 300px;
  min-height: 200px;
  height: auto;
  border: 1px solid gainsboro;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.5);

  > div input {
    width: 100%;
  }
`;

const GameContainer = styled.div`
  margin: 20px auto;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 15px;
  align-items: center;
`;

const SCORE = {
  wins: 0,
  lose: 0,
};

const GENDEROPTIONS = [
  { value: "male", label: "Man" },
  { value: "female", label: "Woman" },
  { value: "non-binary", label: "No binary" },
];

const App = () => {
  const [userName, setUserName] = useState("Tiago");
  const [gender, setGender] = useState(GENDEROPTIONS[2]);
  const [isLogged, setIsLogged] = useState(true);
  const [score, setScore] = useState({ ...SCORE });

  if (!isLogged)
    return (
      <GameStartWrapper>
        <div className="field">
          <label className="label">Which is your username?</label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="field">
          <Dropdown
            options={GENDEROPTIONS}
            selected={gender}
            onSelectedChange={setGender}
          >
            <label>Choose your gender</label>
          </Dropdown>
        </div>
        <button className="ui submit button" onClick={() => setIsLogged(true)}>
          Enviar
        </button>
      </GameStartWrapper>
    );
  if (isLogged)
    return (
      <GameContainer className="ui grid">
        <div className="ten wide column">
          <Gameplay setScore={setScore} score={score} />
        </div>
        <div className="four wide column">
          {/* <UserProfile name={userName} gender={gender} score={score} /> */}
        </div>
      </GameContainer>
    );
};

export default App;
