import React from "react";
import {
  ButtonContainer,
  NextButton,
  PreviousButton,
} from "../Buttons&Filters/styledButtons";

function Pagination({ onPreviousPage, onNextPage }) {
  return (
    <ButtonContainer>
      <PreviousButton onClick={onPreviousPage}>anterior</PreviousButton>
      <NextButton onClick={onNextPage}>siguiente</NextButton>
    </ButtonContainer>
  );
}

export default Pagination;
