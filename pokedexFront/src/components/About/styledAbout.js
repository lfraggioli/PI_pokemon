import styled from "styled-components";
import background from "../../assets/body_bg.png";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  width: 900px;
  height: 500px;
  background: linear-gradient(
    90deg,
    rgba(235, 244, 245, 0.5) 0%,
    rgba(95, 123, 166, 0.9) 100%
  );
  left: 50%;
  top: 4em;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  margin-bottom: 1.5em;
  transform: translate(-50%);
  border-radius: 15px;
`;

export const TextContainer = styled.div`
  width: 500px;
  position: relative;
  right: 0;
  left: 50%;
  padding-left: 2em;
  transform: translate(-20%);
  text-align: right;
  margin-top: 3em;
`;

export const Title = styled.h1`
  color: #f6bd20;
  text-shadow: 1px 2px 2px black;
`;

export const Photo = styled.img`
  position: absolute;
  width: 30%;
  margin-left: 2em;
  margin-top: 7em;
  border: 0.6px solid black;
`;
export const Line = styled.p`
  position: relative;
  line-height: 1em;
  line-break: normal;
  break-after: auto;
  font-size: 1em;
  font-family: "Roboto", monospace;
  font-weight: 900;
  color: #ffff;
  text-shadow: 1px 2px 2px black;
`;
export const Parragraph = styled.div`
  position: relative;
  list-style: none;
  display: block;
  flex-direction: column;

  justify-content: center;
  width: 60%;
`;
