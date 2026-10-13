import './App.css'
import { Component } from 'react'


class App extends Component {
  state = {
    name: "",
    secondName: "",
    email: "",
    contacts: [],
  }

  // handleNameValue = (e) => {
  //   this.setState({
  //     name: e.target.value
  //   })
  // }

  
  // handleSecondNameValue = (e) => {
  //   this.setState({
  //     secondName: e.target.value
  //   })
  // }

  
  // handleEmailValue = (e) => {
  //   this.setState({
  //     email: e.target.value
  //   })
  // }


  handleChange = (e) => {
    const {name, value} = e.target
    
    this.setState({
      [name]: value
    })
  }

  handleAddContacts = () => {
    if(this.state.name.trim() === "")return;

    const newContact = {
       name: this.state.name,
       secondName: this.state.secondName,
       email: this.state.email,
    }


    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: "",
      secondName: "",
      email: "",
    }))
  }

  render(){
    return(
      <>
      <form>
        <input type="text" name='name' onChange={this.handleChange} value={this.state.name} placeholder='ведіть ваше імя'/>
        <input type="text" name='secondName' onChange={this.handleChange} value={this.state.secondName}placeholder='ведіть ваше прізвище'/>
        <input type="email" name='email' onChange={this.handleChange} value={this.state.email}placeholder='ведіть вашу пошту'/>
   

     
        <button onClick={this.handleAddContacts} type='button'>добавити</button>
         </form>

      <h3>контакти:</h3>

      <ul>{this.state.contacts.map((contact, id) => (
        <li key={id}>{contact.name} {contact.secondName} {contact.email}</li>
      ))}</ul>
      </>
    )
  }
}


export default App 