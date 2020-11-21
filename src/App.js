import React, { useState } from "react";
import Gameplay from "./components/game/game";
import UserProfile from "./components/avatar/avatar";
import { Dropdown } from "./components/dropdown/dropdown";
import styled from "styled-components";

const GameStartWrapper = styled.div``;

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
  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState(GENDEROPTIONS[0]);
  const [isLogged, setIsLogged] = useState(false);
  const [score, setScore] = useState({ ...SCORE });

  if (!isLogged)
    return (
      <div className="ui form success">
        <div className="field">
          <label>Which is your username?</label>
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
      </div>
    );
  if (isLogged)
    return (
      <div className="ui grid">
        <div className="sixteen wide column"></div>
        <div className="ten wide column">
          <Gameplay setScore={setScore} score={score} />
        </div>
        <div className="six wide column">
          <UserProfile name={userName} gender={gender} score={score} />
        </div>
      </div>
    );
};

export default App;
