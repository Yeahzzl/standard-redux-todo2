import React from "react";
import { styled } from "styled-components";

function Header() {
  return (
    <div>
      <MainTitle>TodoList</MainTitle>
    </div>
  );
}

const MainTitle = styled.h1`
  background-color: yellow;
`;
export default Header;
