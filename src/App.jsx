import "./App.css";
import { Component } from "react";
import initialTodos from "./todo.json"
import TodoList from "./components/TodoList/TodoList";
import Info from "./components/Info/Info";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import { nanoid } from "nanoid";
import Fillter from "./components/Filter/Filter";
console.log(initialTodos);

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
  };

 
  
  

  

  render() {
    


    return (
      <>

      </>
    );
  }
}

export default App;
