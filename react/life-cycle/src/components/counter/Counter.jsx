
import React from "react"


export class Counter extends React.Component{

    constructor(){
        super()
        this.state= {contador :0}
        console.log("Contruindo a classe counter")
    }
        componentDidMount(){console.log('Componente foi montado')}

    render(){
        return(
            <div>
                <h1>{this.state.contador}</h1>

                <button onClick={()=>this.setState({contador : this.state.contador--})}>Diminuir</button>
                <button onClick={()=>this.setState({contador : this.state.contador++})}>Aumentar</button>


            </div>
        )
    }
}