import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
import axios from "axios";
import { validateForm } from "./validaciones";
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

  const [errors, setErrors] = useState("");
  const handleCreateButtonClick = () => {
    if (
      !formData.name ||
      !formData.image ||
      !formData.hp ||
      !formData.attack ||
      !formData.defense ||
      !formData.types.length
    ) {
      window.alert("Por favor, completa todos los campos");
    }
  };

  const [registro, setRegistro] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setErrors(validateForm({ ...formData, [name]: value }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!handleCreateButtonClick()) {
        const { data } = await axios.post(
          "http://localhost:3001/pokemons/db",
          formData
        );
        if (data.message === "Registro exitoso") {
          setRegistro(!registro);
        }
      }
    } catch (error) {
      console.log(error);
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
    <FormContainer>
      <FormWrapper>
        <h2>¡Crea el tuyo!</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <label>Imagen</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              placeholder="URL de imagen"
            />
            {errors.image && <p>{errors.image}</p>}
          </div>
          <div>
            <label>Ataque</label>
            <input
              type="number" // Cambia el tipo a "number"
              name="attack"
              value={formData.attack}
              onChange={handleInputChange}
            />
            {errors.attack && <p>{errors.attack}</p>}
          </div>
          <div>
            <label>Defensa</label>
            <input
              type="number" // Cambia el tipo a "number"
              name="defense"
              value={formData.defense}
              onChange={handleInputChange}
            />
            {errors.defense && <p>{errors.defense}</p>}
          </div>
          <div>
            <label>HP (salud)</label>
            <input
              type="number"
              name="hp"
              value={formData.hp}
              onChange={handleInputChange}
            />
            {errors.hp && <p>{errors.hp}</p>}
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
  );
};

export default AddPokemon;
