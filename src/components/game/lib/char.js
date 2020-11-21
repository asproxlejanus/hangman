import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "./images/head/head-states";
import Body from "./images/body/body-states";
import LeftArm from "./images/left-arm/left-arm";
import RightArm from "./images/right-arm/right-arm";
import RightLeg from "./images/right-leg/right-leg";
import LeftLeg from "./images/left-leg/left-leg";

const CharContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  > .char-head {
    width: 100px;
    height: 100px;
    z-index: 30;
    text-aling: center;
    left: 25px;
    position: relative;
    top: -10px;
  }

  > .char-body-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }
  > .char-body-container > .char-left-hand {
    width: 25px;
    height: 75px;
    position: relative;
    top: -20px;
    left: 32px;
  }
  > .char-body-container > .char-body {
    position: relative;
    top: -25px;
    width: 120px;
    height: 80px;
    z-index: 25;
  }
  > .char-body-container > .char-right-hand {
    width: 25px;
    height: 75px;
    position: relative;
    top: -20px;
    left: 5px;
  }
  > .char-legs {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  > .char-legs > .char-left-leg {
    width: 30px;
    height: 80px;
    position: relative;
    top: -10px;
    right: 10px;
  }
  > .char-legs > .char-right-leg {
    width: 30px;
    height: 80px;
    position: relative;
    top: -15px;
    left: 10px;
  }
  * .display-leg-none {
    width: 40px;
    height: 100px;
  }
  * .display-arms-none {
    width: 25px;
    height: 75px;
  }
  * .display-body-none {
    width: 120px;
    height: 80px;
  }
`;

export const Character = ({ points }) => {
  const [bodyState, setBodyState] = useState(Head.normal);

  useEffect(() => {
    if (points <= 5) setBodyState(Head.normal);
    if (points <= 4) setBodyState(Head.worried);
    if (points <= 3) setBodyState(Head.crying);
    if (points <= 2) setBodyState(Head.crying2);
    if (points <= 1) setBodyState(Head.crying);
    if (points < 1) setBodyState(Head.crying3);
  }, [points]);

  return (
    <CharContainer className="char-container">
      <div className="char-head">
        <img src={bodyState} alt="Head" />
      </div>
      <div className="char-body-container">
        <div className="char-left-hand">
          {points < 2 ? null : <img src={LeftArm.normal} alt="Left Arm" />}
        </div>
        <div className="char-body">
          {points <= 1 ? null : <img src={Body.normal} alt="Body" />}
        </div>
        <div className="char-right-hand">
          {points < 3 ? null : <img src={RightArm.normal} alt="Right Arm" />}
        </div>
      </div>
      <div className="char-legs">
        <div className="char-left-leg">
          {points < 4 ? null : <img src={RightLeg.normal} alt="Right Leg" />}
        </div>
        <div className="char-right-leg">
          {points < 5 ? null : <img src={LeftLeg.normal} alt="Right Leg" />}
        </div>
      </div>
    </CharContainer>
  );
};

export default Character;
