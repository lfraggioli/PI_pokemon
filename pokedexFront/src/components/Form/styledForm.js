import styled from "styled-components";

export const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 2em;
  margin-bottom: 2em;
  padding-top: 2em;
  width: 500px;
  height: 700px;
`;

export const FormWrapper = styled.div`
  display: flex;
  margin-top: 2em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1.5rem;
  max-width: 100%;
  overflow: auto;
  h2 {
    margin-top: 0.5em;
    margin-bottom: 0;
    top: 0;
    padding-bottom: 0.5em;
    color: #f5f5f5;
    -webkit-text-stroke: 1% black;
    font-weight: 400;
    font-size: 2em;
  }
  label {
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-size: 1.2em;
    right: 0;
    margin-bottom: 1em;
    line-height: 1.2;
    color: #f5f5f5;
  }
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center; /* Agrega esta propiedad para centrar horizontalmente */
    margin-bottom: 1em;
  }
  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 1em; /* Agrega la propiedad margin-bottom para agregar un salto de línea */
  }
`;

export const AddType = styled.input`
  padding: 0.5rem;

  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 1em;
  margin-bottom: 1em; /* Agrega la propiedad margin-bottom para agregar un salto de línea */
`;

export const TypeDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DeleteType = styled.button`
  margin-bottom: 1em;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #ff4100;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff524a;
  }
`;

export const AddButton = styled.button`
  font-family: "Lato", sans-serif;
  font-weight: 900;
  margin-bottom: 1em;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #f7e652;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f6bd20;
    color: #000;
  }
`;
export const Button = styled.button`
  align-self: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #83e631;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Lato", sans-serif;
  font-weight: 900;
  &:hover {
    background-color: #6ab429;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
