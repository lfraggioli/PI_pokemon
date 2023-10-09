export function validateForm(input) {
  // name: "",
  // image: "",
  // hp: 0,
  // attack: 0,
  // defense: 0,
  // types: [],
  let errors = {};

  if (input.name === "") {
    errors.name = "Name is required";
  } else if (!/^[A-Za-z ]+$/.test(input.name))
    errors.name = "Sin caracteres especiales o números!";

  //   if (input.image === "") {
  //     errors.image = "Ingrese una URL";
  //   }

  if (input.hp < 1 || input.hp > 500) {
    errors.hp = "Error, ingrese numero entre 1 y 500";
  }

  if (input.attack < 10 || input.attack > 1000)
    errors.attack = "Error, ingrese numero entre 10 y 1000";

  if (input.defense < 10 || input.defense > 1000)
    errors.defense = "Error, ingrese numero entre 10 y 1000";

  return errors;
}
