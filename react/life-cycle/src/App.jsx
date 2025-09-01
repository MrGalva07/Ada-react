import React from "react";
import { Counter } from "./components/counter/Counter";

export class App extends React.Component{
    constructor(){
      super()
      
        this.state = {showCounter:false}
    }

render(){
  return (
    <div>
      <h1>Life Cycle</h1>


        <button onClick={()=>{this.setState({showCounter: !this.state.showCounter})}}>{this.state.showCounter? 'Remove Counter':'Show Counter'}</button>
        {this.state.showCounter? <Counter /> : null}

    </div>
  );
}


}