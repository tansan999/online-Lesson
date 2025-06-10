import React from "react";
import styled from "styled-components";
import Card from "./components/card";

export default function App() {
  return (
    <FonApp>
      <Card />
    </FonApp>
  );
}

const FonApp = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: flex-start;
gap: 24px;
padding: 40px;
min-height: 100vh;
`;
