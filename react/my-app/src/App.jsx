import React from "react";

import "./styles/App.css"
import Navbar from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import article1 from "./assets/images/article-1.png"
import article2 from "./assets/images/article-2.png"
import article3 from "./assets/images/article-3.jpg"
import { Counter } from "./components/Counter/Counter";


// Um componente baseado em classe É uma classe que herda a classe componente do react 
// e retorna html dentro do método render


class App extends React.Component {

  //Render é o método responsável por renderizar o conteúdo html dentro do nosso component
  render() {
    return (
      <>
        <Navbar />
        <Counter />

        <section id="articles">
          <Article title="Notícia 1"
                  thumbnail={article1}
                   provider="NASA"
                   description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo alias aut tempora blanditiis quibusdam repudiandae velit? Possimus quia nihil placeat quaerat ipsa! Distinctio esse vero nihil sed aliquam impedit quam."  
          />
          <Article title="Notícia 2"
          thumbnail={article2}
                   provider="META"
                   description="Consectetur adipisicing elit. Quo alias aut tempora blanditiis quibusdam repudiandae velit? Possimus quia nihil placeat quaerat ipsa! Distinctio esse vero nihil sed aliquam impedit quam."  
          />   
                    
          <Article title="Notícia 3"
          thumbnail={article3}
                   provider="SPACEX"
                   description="Amet consectetur adipisicing elit. Quo alias aut tempora blanditiis quibusdam repudiandae velit? Possimus quia nihil placeat quaerat ipsa! Distinctio esse vero nihil sed aliquam impedit quam."  
          />
         
        </section>

      </>
    );
  }
}


export default App;
