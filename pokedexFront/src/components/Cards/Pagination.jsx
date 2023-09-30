import React from "react";
import {
  ButtonContainer,
  NextButton,
  PageContainer,
  PreviousButton,
} from "../Buttons&Filters/styledButtons";

function Pagination({ onPreviousPage, onNextPage }) {
  return (
    <PageContainer>
      <ButtonContainer>
        <PreviousButton onClick={onPreviousPage}>anterior</PreviousButton>
        <NextButton onClick={onNextPage}>siguiente</NextButton>
      </ButtonContainer>
    </PageContainer>
  );
}

export default Pagination;
