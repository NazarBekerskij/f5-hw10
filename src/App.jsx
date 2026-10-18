import "./App.css";
import { Component } from "react"; 

import { nanoid } from "nanoid";

import Title from "./components/Title/Title";
import Form from "./components/Form/Form";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";


class App extends Component {

  state = {
  contacts: [],
  name: '',
  number: "",
  filter: "",
}

handleChange = (e) => {
  const {name, value} = e.target

  this.setState({[name]: value})
}

handleSubmit = (e) => {
  e.preventDefault()


  const  {name, number, contacts} = this.state

  if(name.trim() === "" || number.trim() === ""){return;}

  const newContact = {
    id: nanoid(),
    name,
    number,
  }

  this.setState((prevState) => ({
    contacts: [...prevState.contacts, newContact],
    name: "",
    number: "",
  }))
}
 
  
  
handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleDeleteContact = (contactId) => {
    this.setState((prevState) => ({
        contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render() {
    
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
    <Title/>
    <Form
    onSubmit={this.handleSubmit}
    onChange={this.handleChange}
    name={this.state.name}
    number={this.state.number}
    />

      <h2>Contacts</h2>
      <Filter 
      value={this.state.filter}
      onChange={this.handleFilterChange}
      />

    <Contacts contacts={filteredContacts}/>
      </>
    );
  }
}

export default App;
