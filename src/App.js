import React, { useState } from "react";
import Gameplay from "./components/game/game";
import UserProfile from "./components/avatar/avatar";

const SCORE = {
  wins: 0,
  lose: 0,
};

const App = () => {
  const [userName, setUserName] = useState("Tiago");
  const [isLogged, setIsLogged] = useState(true);
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
          <UserProfile name={userName} score={score} />
        </div>
      </div>
    );
};

export default App;
