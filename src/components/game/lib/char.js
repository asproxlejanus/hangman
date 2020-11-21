import React from "react";
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
    width: 80px;
    height: 100px;
    background-image: url(${Head.normal});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 30;
  }

  > .char-body-container {
    display: flex;
    flex-direction: row;
  }
  > .char-body-container > .char-left-hand {
    border-top-left-radius: 60px;
    border-top-right-radius: 0px;
    width: 25px;
    height: 75px;
    position: relative;
    top: -20px;
    left: 32px;
    background-image: url(${LeftArm.normal});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  > .char-body-container > .char-body {
    position: relative;
    top: -25px;
    width: 120px;
    height: 80px;
    background-image: url(${Body.normal});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 25;
  }
  > .char-body-container > .char-right-hand {
    width: 25px;
    height: 75px;
    position: relative;
    width: 25px;
    height: 75px;
    top: -20px;
    right: 32px;
    background-image: url(${RightArm.normal});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  > .char-legs {
    display: flex;
    flex-direction: row;
  }
  > .char-legs > .char-left-leg {
    border-top-left-radius: 3px;
    border-top-right-radius: 5px;
    width: 40px;
    height: 100px;
    position: relative;
    top: -38px;
    right: -2px;
    background-image: url(${RightLeg.normal});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  > .char-legs > .char-right-leg {
    width: 40px;
    height: 100px;
    position: relative;
    top: -38px;
    left: -2px;
    background-image: url(${LeftLeg.normal});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const Character = () => {
  return (
    <CharContainer className="char-container">
      <div className="char-head"></div>
      <div className="char-body-container">
        <div className="char-left-hand"></div>
        <div className="char-body"></div>
        <div className="char-right-hand"></div>
      </div>
      <div className="char-legs">
        <div className="char-left-leg"></div>
        <div className="char-right-leg"></div>
      </div>
    </CharContainer>
  );
};

export default Character;
