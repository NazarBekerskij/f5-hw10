import { Component } from "react";


class Info extends Component {
    render(){
        const {count, done} = this.props
        return(
            <>
            <p>Кількість завдань: {count}</p>
            <p>Виконано: {done}</p>
            </>
        )
    }
}

export default Info


// Info -  елементи для відображення Загальної кількості завдань та Кількості виконаних