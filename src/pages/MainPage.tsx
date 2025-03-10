import styled from "styled-components";
import { mainpageImg } from "../assets";
import { useEffect, useRef } from "react";

export const MainPage = () => {
  return (
    <Container>
      <Img src={mainpageImg} alt="배경" />
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Img = styled.img`
  width: 100vw;
`;
