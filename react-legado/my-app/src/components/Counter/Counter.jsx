import React from "react"


export class Counter extends React.Component{

    constructor(){
        super()
        this.counter = 0;
    }
    render(){
        return(
            <div style={{marginTop :"20px",marginLeft:"20px" }}>
                <h1>{this.counter}</h1>
                <div>
                <button id="aumentar" onClick={()=> {this.counter++}}>Aumentar</button>
                <button id="diminuir" onClick={()=>{this.counter--}}>Diminuir</button>
                </div>
            </div>
        )
    }
}