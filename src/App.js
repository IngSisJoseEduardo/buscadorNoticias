import React, { Fragment } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';


function App() {
  return (
    <Fragment>
      <Header
        titulo="Buscador de noticias"
      />

      <div className="container white">
        <Formulario/>
      </div>
    </Fragment>
  );
}

export default App;
