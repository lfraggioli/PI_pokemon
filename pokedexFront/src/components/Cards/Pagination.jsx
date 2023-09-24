import React from "react";

function Pagination({ onPreviousPage, onNextPage }) {
  return (
    <div>
      <button onClick={onPreviousPage}>ANTERIOR</button>
      <button onClick={onNextPage}>SIGUIENTE</button>
    </div>
  );
}

export default Pagination;
