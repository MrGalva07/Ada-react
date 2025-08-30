/*
PROPS ---> A palavra props cria um objeto no seu componente que receberá
TODAS AS PROPRIEDADES que você definiu

props{

}


*/



import React from "react";
import "./styles.css"

export class Article extends React.Component {
    render() {
        return (
            <article id="article">
                <img src={this.props.thumbnail} alt="article-img" className="article-img" />
                <div className="article-infos">
                         {/*Nesse caso o "this" acessa a classe, e ,Ao utilizar o "props",estou de certa forma
                            criando um objeto props que receberá todas as propriedades que eu passar
                            OBS:Componentes nos permitem inclusive criar propriedades que não
                            existem convencionalmente puramente baseado nas nossas necessidades
                    */}
                    <h2 className="article-title">{this.props.title}</h2>
                    {/* acessei de dentro do objeto "props(propriedades)" a propriedade de title que eu mesmo criei 
                    na chamada desse meu componente Article
                    */}
                    <h3 className="article-provider">{this.props.provider}</h3>
                    <p className="article-description"> {this.props.description}</p>
                </div>
            </article>
        )
    }



}
