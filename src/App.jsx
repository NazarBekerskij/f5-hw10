import './App.css'
import { Component } from 'react'

class App extends Component {
  state = {
    name: "",
    secondName: "",
    email: "",
    contacts: [],
  }

  handleNameValue = (e) => {
    this.setState({
      name: e.target.value
    })
  }

   handleSecondNameValue = (e) => {
    this.setState({
      secondName: e.target.value
    })
  }

    handleEmailValue = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleAddContacts = () => {
    if(this.state.name.trim() === "")return;

    const newContacts = {
      name: this.state.name,
      secondName: this.state.secondName,
      email: this.state.email,
    }

    this.setState((prveState) => ({
      contacts: [...prveState.contacts, newContacts],
      name: "",
      secondName: "",
      email: "",
    }))
  }

  render(){
    return(
      <>
      <div>
        <input type="text" value={this.state.name} onChange={this.handleNameValue} placeholder='ведіть ваше імя' />
        <input type="text" value={this.state.secondName} onChange={this.handleSecondNameValue} placeholder='ведіть ваше прізвище'/>
        <input type="email" value={this.state.email} onChange={this.handleEmailValue} placeholder='ведіть вашу пошту'/>
      </div>

      <div>
        <button onClick={this.handleAddContacts} type='button'>відправити</button>
      </div>

      <h3>список:</h3>


      <ul>{this.state.contacts.map((contactc, id) => (
        <li key={id}>
          <p>{contactc.name}</p>        
          <p>{contactc.secondName}</p>   
          <p>{contactc.email}</p>   
        </li>
      ))}</ul>
      </>
    )
  }
}


export default App