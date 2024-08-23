// Ejercicio 5: Añadir Elementos a una Lista
// Enunciado:
// Crea una página con una lista desordenada y un botón. Al hacer clic en el botón, se debe añadir un nuevo elemento a la lista con el texto "Nuevo elemento".

import { useState } from "react";



export default function App() {

    

    // Manejo de la lista como estado
    const [lista, setLista] = useState([
        "Estudiar React",
        "Hacer la cama",
        "Cocinar la cena"
    ]);

    // Función para agregar un nuevo elemento a la lista
    const agregarElemento = () => {
        setLista([...lista, "Nuevo elemento"]);
    }

    return (
        <>
        <h1>Mi lista</h1>

        {/* Botón con texto */}
        <button onClick={agregarElemento}>Agregar Elemento</button>

        {/* Renderizando la lista */}
        <ul>
            {lista.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>

        
        
        </>
    )
}
        
        
        
        
        
        
        

