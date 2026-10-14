import './App.css'
import { Component } from 'react'
import { ContactForm } from './components/ContactForm/ContactForm'
import { ContactList } from './components/ContactsList/ContactsList'

class App extends Component{
  state = {
    contacts: [],
    name: "",
    nubmer: "",
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }


  handleAddContact = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    if (name.trim() === '' || number.trim() === '') return;

    const newContact = {
      id: crypto.randomUUID(), 
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  }


  render(){
    const {name, number, contacts} = this.state
    return(
      <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm
        name={name}
        numbeer={number}
        handleChange={this.handleChange}
        onSubmit={this.handleAddContact}
        />

        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </div>
      </>
    )
  }
}


export default App