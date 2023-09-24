import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPokemon } from "../../redux/actions";
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
    <div>
      <h2>Crear Pokémon</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label>Ataque:</label>
        <input
          type="number" // Cambia el tipo a "number"
          name="attack"
          value={formData.attack}
          onChange={handleInputChange}
        />
        <label>Defensa:</label>
        <input
          type="number" // Cambia el tipo a "number"
          name="defense"
          value={formData.defense}
          onChange={handleInputChange}
        />
        <label>HP:</label>
        <input
          type="number"
          name="hp"
          value={formData.hp}
          onChange={handleInputChange}
        />
        <label>Tipos:</label>
        {formData.types.map((type, index) => (
          <div key={index}>
            <input
              type="text"
              value={type}
              onChange={(e) => handleTypeChange(index, e.target.value)}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddType}>
          Agregar Tipo
        </button>
        <button type="submit">Agregar Pokemon a la BDD</button>
      </form>
    </div>
  );
};

export default AddPokemon;
