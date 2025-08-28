import React from "react";

import "./styles/App.css"
import Navbar from "./components/Navbar/Navbar";

// Um componente baseado em classe É uma classe que herda a classe componente do react 
// e retorna html dentro do método render


class App extends React.Component {

  //Render é o método responsável por renderizar o conteúdo html dentro do nosso component
  render() {
    return (
    <Navbar />
    );
  }
}


export default App;
