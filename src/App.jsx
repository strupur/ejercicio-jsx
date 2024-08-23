import { useState } from 'react';

export default function App() {
  // Declarar un estado para el texto del párrafo
  const [text, setText] = useState("Texto inicial");

  // Función para actualizar el texto cuando se hace clic en el botón
  const handleChangeText = () => {
    setText("¡Texto actualizado!");
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
