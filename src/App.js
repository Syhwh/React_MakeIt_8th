import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
constructor(){
  super();
  this.state={
   tasks: ['Sacar la ropa','Hacer la cama','Leer un rato'],
   value:''
  }
}

handleChange=(event)=>{
  this.setState({ value: event.target.value })
}

handleSubmit=(event)=> {
  event.preventDefault();
 this.setState( { tasks: this.state.tasks.concat(this.state.value),
value:'' });
}

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task,index)=><li key={index}>{task}</li>)}
          </ul>
           <form  onSubmit={this.handleSubmit}>
             <input value={this.state.value} onChange={this.handleChange} type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
