import React, { useEffect, useState } from "react";

/* const Headlines = [
  { wins: 0, text: "A person who never won a this game" },
  { wins: 1, text: "A person that just won a game" },
  { wins: 2, text: "A person who is good playing this game" },
  { lose: 1, text: "A person who never won" },
];
 */
const UserProfile = ({ name, score }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    ((score) => {
      let percentage = score.wins / (score.wins + score.lose);
      !percentage
        ? setPercentage("0")
        : setPercentage((percentage * 100).toString());
    })(score);
  }, [score]);

  return (
    <div className="ui card">
      <div className="image">
        <img
          src="https://semantic-ui.com/images/avatar2/large/matthew.png"
          alt="User"
        />
      </div>
      <div className="content">
        <a className="header">{name}</a>
        <div className="description">
          {name} is person who wins {percentage}% of the time.
        </div>
      </div>
      <div className="extra content">
        Wins: {score.wins}, Lose: {score.lose}
      </div>
    </div>
  );
};

export default UserProfile;
