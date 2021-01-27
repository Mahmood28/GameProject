import styled from "styled-components";

export const Base = styled.section`
  padding: 2em;
  background: papayawhip;
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: black;
`;

export const FinalScore = styled.h1`
  font-size: 10rem;
  text-align: center;
  color: black;
`;

export const Score = styled.h2`
  font-size: 2rem;
  text-align: left;
  color: black;
`;

export const Circle = styled.div`
  background: black;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  position: relative;
  margin: auto;
`;

export const Image = styled.img`
  position: absolute;
  background: #a9aaab;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  top: 50%;
  left: 50%;
  margin: -75px 0px 0px -75px;
`;

export const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 40px;
`;

export const Block = styled.div`
  border: 12px solid black;
  padding: 30px;
  margin: auto;
  margin-top: 100px;
  align: center;
`;
