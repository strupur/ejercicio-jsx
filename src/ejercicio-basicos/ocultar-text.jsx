// Ejercicio 2: Mostrar/Ocultar un Elemento
// Enunciado:
// Crea una página con un párrafo y un botón. Al hacer clic en el botón, el párrafo debe ocultarse si está visible, y debe mostrarse si está oculto

import { useState } from "react";

export default function App() {
  // Estado para controlar si el párrafo está visible o no
  const [isVisible, setIsVisible] = useState(true);

  // Función que cambia el estado de visibilidad
  const toggleParagraph = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h1>Mostrar/Ocultar Párrafo</h1>

      {/* Botón para mostrar/ocultar */}
      <button onClick={toggleParagraph}>
        {isVisible ? "Ocultar Párrafo" : "Mostrar Párrafo"}
      </button>

      {/* Párrafo que se muestra u oculta según el estado */}
      {isVisible && <p>Este es el párrafo que se puede ocultar o mostrar.</p>}
    </div>
  );
}
