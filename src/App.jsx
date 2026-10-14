import "./App.css";
import { Component } from "react";
import initialTodos from "./todo.json";
import TodoList from "./components/TodoList/TodoList";
import Info from "./components/Info/Info";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import { nanoid } from "nanoid";
import Fillter from "./components/Filter/Filter";

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
  };

  handleDelete = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.filter((todo) => todo.id !== id),
    }));
  };

  handleAppSubmit = (text) => {
    const data = {
      id: nanoid,
      text: text,
      completed: false,
    };
    this.setState((prev) => ({
      todos: [...prev.todos, data],
    }));
  };

  handleFilter = (text) => {
    this.setState({
      filter: text,
    });
  };

  render() {
    const { todos, filter } = this.state;
    const filteredTodo = todos.filter((todo) =>
      todo.text.toLowerCase().includes(filter.toLowerCase()),
    );
    const count = todos.length;

    const done = todos.filter((todo) => todo.completed).length;

    return (
      <>
        <Info count={count} done={done} />
        <TodoEditor onForm={this.handleAppSubmit} />
        <Fillter onFilter={this.handleFilter} />
        <TodoList todos={filteredTodo} onDelete={this.handleDelete} />
      </>
    );
  }
}

export default App;
