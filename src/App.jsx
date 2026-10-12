import './App.css'
import { Component } from 'react'

class App extends Component{
  state = {
    name: "",
    secondName: "",
    email: "",
    contacts: [],
  }

  handleNameChange = (e) => {
    const text = e.target.value

    this.setState({
      name: text
    }) 
  }

  handleSecondName = (e) => {
    this.setState({
      secondName: e.target.value
    })
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleAddContact = () => {
    if (this.state.name.trim() === "") return;

    const newContact = {
      name: this.state.name,
      email: this.state.email,
      secondName: this.state.secondName
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: "",
      email: "",
      secondName: ""
    }))
  }

  render(){
    return(
      <>
      <div>
        <input 
          type="text" 
          value={this.state.name} 
          placeholder='ведіть ваше імя' 
          onChange={this.handleNameChange} 
        />
        <input 
          type="text" 
          value={this.state.email} 
          placeholder='ведіть вашу пошту' 
          onChange={this.handleEmailChange} 
        />
        <input 
          type="text"
          value={this.state.secondName}
          placeholder='ведіть ваше прізвище'
          onChange={this.handleSecondName}
        />
      </div>
      
      <div>
      <button onClick={this.handleAddContact} type='button'>Добавити контакт</button>
      </div>  

      <h3>список</h3>

      <ul>
        {this.state.contacts.map((contact, id) => (
          <li key={id}>{contact.name} {contact.email} {contact.secondName}</li>
        ))}
      </ul>
      </>
    )
  }
}

export default App