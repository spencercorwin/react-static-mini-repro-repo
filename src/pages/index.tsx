import React from "react";
import styled from "@emotion/styled";

const SubHeader = styled.div({
  color: "red"
});

const StyledHeader = styled.h2({
  [SubHeader as any]: {
    color: "green"
  }
});

export default () => (
  <div style={{ textAlign: "center" }}>
    <h1>
      Welcome to React-Static <br /> + TypeScript
    </h1>
    <StyledHeader>
      Spencer <SubHeader>is cool</SubHeader>
    </StyledHeader>
    <SubHeader>Subheader which is not within StyledHeader</SubHeader>
    <p>
      Learn{" "}
      <a href="https://github.com/sw-yx/react-typescript-cheatsheet">
        React + TypeScript
      </a>
    </p>
    <p>
      <a href="https://twitter.com/swyx">Report issues with this template</a>
    </p>
  </div>
);
