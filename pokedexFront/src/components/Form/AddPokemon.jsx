import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPokemon } from "../../redux/actions";
import {
  AddButton,
  AddType,
  Button,
  ButtonContainer,
  DeleteType,
  FormContainer,
  FormWrapper,
  TypeDiv,
} from "./styledForm";
const AddPokemon = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    types: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleAddType = () => {
    // Agrega un nuevo tipo vacío al formulario
    setFormData({ ...formData, types: [...formData.types, ""] });
  };
  const handleTypeChange = (index, value) => {
    // Actualiza el valor de un tipo en el formulario
    const updatedTypes = [...formData.types];
    updatedTypes[index] = value;
    setFormData({ ...formData, types: updatedTypes });
  };
  const handleRemoveType = (index) => {
    // Elimina un tipo del formulario
    const updatedTypes = [...formData.types];
    updatedTypes.splice(index, 1);
    setFormData({ ...formData, types: updatedTypes });
  };
  const isFormValid = () => {
    if (
      !formData.name ||
      !formData.hp ||
      !formData.attack ||
      !formData.defense
    ) {
      alert("Por favor, complete todos los campos requeridos.");
      return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      // Realiza la solicitud al servidor solo si la validación es exitosa
      dispatch(addPokemon(formData));
    }
    console.log(formData);
    //?Limpiar formulario 👇🏻
    setFormData({
      name: "",
      image: "",
      hp: 0,
      attack: 0,
      defense: 0,
      types: [],
    });
  };
  return (
    <>
      <FormContainer>
        <FormWrapper>
          <h2>Create Pokémon</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Image</label>
              <input
                type="text"
                name="name"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="URL de imagen"
              />
            </div>
            <div>
              <label>Attack</label>
              <input
                type="number" // Cambia el tipo a "number"
                name="attack"
                value={formData.attack}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Defense</label>
              <input
                type="number" // Cambia el tipo a "number"
                name="defense"
                value={formData.defense}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>HP</label>
              <input
                type="number"
                name="hp"
                value={formData.hp}
                onChange={handleInputChange}
              />
            </div>
            <TypeDiv>
              {" "}
              <label>Tipos:</label>
              {formData.types.map((type, index) => (
                <TypeDiv key={index}>
                  <AddType
                    type="text"
                    value={type}
                    onChange={(e) => handleTypeChange(index, e.target.value)}
                  />
                  <DeleteType
                    type="button"
                    onClick={() => handleRemoveType(index)}
                  >
                    -
                  </DeleteType>
                </TypeDiv>
              ))}
              <AddButton type="button" onClick={handleAddType}>
                +
              </AddButton>
            </TypeDiv>

            <ButtonContainer>
              <Button type="submit">Confirm</Button>
            </ButtonContainer>
          </form>
        </FormWrapper>
      </FormContainer>
    </>
  );
};

export default AddPokemon;
