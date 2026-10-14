import { Component } from "react";

class  TodoEditor extends Component {
    state = {
        textValue: '',
    }
    handleSubmit = (evt) => {
        evt.preventDefault()
         const {textValue} = this.state
         const {onForm} = this.props
         onForm(textValue)
         this.setState({
            textValue: "",
         })
    }

    render(){
        const {textValue} = this.state
    return(
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={textValue} onChange={(evt) => this.setState({textValue: evt.target.value}) } />
            <button type="submit">Create</button>
        </form>
    )
 }
}

export default TodoEditor



// TodoEditor - форма для додавання нового завдання, 