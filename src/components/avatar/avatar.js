import React, { useEffect, useState } from "react";
import styled from "styled-components";

/* const Headlines = [
  { wins: 0, text: "A person who never won a this game" },
  { wins: 1, text: "A person that just won a game" },
  { wins: 2, text: "A person who is good playing this game" },
  { lose: 1, text: "A person who never won" },
];
 */

const avatarImages = [
  {
    gender: "female",
    imageLink: "https://semantic-ui.com/images/avatar2/large/molly.png",
  },
  {
    gender: "non-binary",
    imageLink: "https://semantic-ui.com/images/avatar2/large/elyse.png",
  },
  {
    gender: "male",
    imageLink: "https://semantic-ui.com/images/avatar2/large/matthew.png",
  },
];

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  > div:last-of-type {
    margin: 0px 10px;
  }
`;
const UserProfile = ({ name, gender, score }) => {
  const [percentage, setPercentage] = useState(0);
  const [imageProfile, setImageProfile] = useState("");

  useEffect(() => {
    ((score) => {
      let percentage = score.wins / (score.wins + score.lose);
      !percentage
        ? setPercentage("0")
        : setPercentage((percentage * 100).toString());
    })(score);
  }, [score]);

  useEffect(() => {
    switch (gender.value) {
      case "female":
        setImageProfile(avatarImages[0].imageLink);
        break;
      case "male":
        setImageProfile(avatarImages[1].imageLink);
        break;
      case "non-binary":
        setImageProfile(avatarImages[2].imageLink);
        break;
      default:
        break;
    }
  }, []);

  return (
    <div className="ui card">
      <div className="image">
        <img src={imageProfile} alt="User" />
      </div>
      <div className="content">
        <a className="header">{name}</a>
        <div className="description">
          {name} is person who wins {percentage}% of the time.
        </div>
      </div>
      <div className="extra content">
        <h4>Score:</h4>
        <ScoreContainer>
          <div>
            <i className="thumbs up icon" />
            Wins: {score.wins}
          </div>
          <div>
            <i className="thumbs down icon" />
            Loss: {score.lose}
          </div>
        </ScoreContainer>
      </div>
    </div>
  );
};

export default UserProfile;
