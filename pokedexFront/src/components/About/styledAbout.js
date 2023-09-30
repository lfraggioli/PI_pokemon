import styled from "styled-components";
import background from "../../assets/body_bg.png";

export const Background = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  overflow-y: auto;
  min-height: 100vh;
  width: 100%;
  z-index: 0;
`;
