// Ejercicio 3: Contador de Clics
// Enunciado:
// Crea una página con un botón y un párrafo que muestra un contador de clics. Cada vez que se haga clic en el botón, el contador debe incrementarse en 1 y actualizar el texto del párrafo.

import React, { useState } from "react";

export default function App() {
  // Definir el estado del contador
  const [clicks, setClicks] = useState(0);

  // Función para incrementar el contador
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div>
      <h1>Contador de Clics</h1>
      {/* Mostrar el número de clics */}
      <p>Has hecho clic {clicks} veces.</p>
      
      {/* Botón que incrementa el contador */}
      <button onClick={handleClick}>Incrementar Contador</button>
    </div>
  );
}
