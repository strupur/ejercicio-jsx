// Ejercicio 4: Cambiar el Estilo de un Elemento
// Enunciado:
// Crea una página con un párrafo y dos botones: "Color Rojo" y "Color Azul". Al hacer clic en cada botón, el color del texto del párrafo debe cambiar al color correspondiente.

import React, { useState } from "react";

export default function App() {
  // Definir el estado para almacenar el color actual
  const [color, setColor] = useState("black");

  // Funciones para cambiar el color
  const changeToRed = () => {
    setColor("orange");
  };

  const changeToBlue = () => {
    setColor("blue");
  };

  return (
    <div>
      <h1>Cambiar el Estilo de un Elemento</h1>

      {/* Párrafo cuyo color de texto cambiará */}
      <p style={{ color: color }}>Este es el texto cuyo color cambiará.</p>

      {/* Botones para cambiar el color */}
      <button onClick={changeToRed}>Color Naranja</button>
      <button onClick={changeToBlue}>Color Azul</button>
    </div>
  );
}
