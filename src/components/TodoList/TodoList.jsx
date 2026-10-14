import { Component } from "react";


class TodoList extends Component {
    render(){
        const {todos, onDelete} = this.props
        return(
            <ul>{todos.map(({id, text, completed}) => {
                return (
                    <li style={{display: "flex", gap: 20, justifyContent: "center"}} key={id}>
                        <input type="checkbox"  checked={completed} readOnly />
                        <p>{text}</p>
                        <button onClick={() => onDelete(id)} type="button">видалити</button>
                    </li>
                )
            })}</ul>
        )
    }
}


export default TodoList


















// TodoList - для відображення списку завдань, 
