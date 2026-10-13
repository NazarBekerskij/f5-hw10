import './App.css'
import { Component } from 'react'
import { ContactForm } from './components/ContactForm/ContactForm'
import { ContactList } from './components/ContactList/ContactList'


class App extends Component {
  state = {
    name: "",
    secondName: "",
    email: "",
    contacts: [],
  }




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
      <ContactForm
      name={this.state.name}
      secondName={this.state.secondName}
      email={this.state.email}
      handleChange={this.handleChange}
      handleAddContacts={this.handleAddContacts}
      />


      <ContactList
      contacts={this.state.contacts}
      />
      </>
    )
  }
}


export default App 