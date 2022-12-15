import React from 'react';
import '../src/App.scss'; // Se importa la hoja de estilos con su direccion

import Container from './Components/Container'; // Se importa el Componente Container con su direccion

function App() {        //Retorna el/los Componentes
  return (
    <div className="App"> 
      <Container /> 
    </div>
  );
}

export default App; // Exporta App
                                     