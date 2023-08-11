import React from "react";
import { styled } from "styled-components";

function Heading({ score, setScore, highScore, setHighScore }) {
  return (
    <StyledHeading>
      <div>Score: {score}</div>
      <div>HighScore: {highScore}</div>
    </StyledHeading>
  );
}

export default Heading;

const StyledHeading = styled.div``;
