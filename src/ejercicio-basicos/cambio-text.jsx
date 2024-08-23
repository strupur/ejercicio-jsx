// Ejercicio 1: Cambiar el Texto de un Elemento
// Enunciado:
// Crea una página con un párrafo que tenga un texto inicial. Debes agregar un botón que, al hacer clic en él, cambie el texto del párrafo a "¡Texto actualizado!".

import { useState } from 'react';

export default function App() {
  // Declarar un estado para el texto del párrafo
  const [text, setText] = useState("Texto inicial2");

  // Función para actualizar el texto cuando se hace clic en el botón
  const handleChangeText = () => {
    setText("¡Texto actualizado2!");
  };

  return (
    <div>
      {/* Párrafo con el estado de texto */}
      <p>{text}</p>

      {/* Botón que llama a la función para actualizar el texto */}
      <button onClick={handleChangeText}>Cambiar Texto</button>
    </div>
  );
}


