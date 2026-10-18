import "./App.css";
import { Component } from "react"; 

import { nanoid } from "nanoid";

import Title from "./components/Title/Title";
import Form from "./components/Form/Form";
import Contacts from "./components/Contacts/Contacts";



class App extends Component {

  state = {
  contacts: [],
  name: '',
  number: "",
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
 
  
  
handleAddContact = (newContact) => {
  this.setState((prevState) => ({
    contacts: [...prevState.contacts, newContact]
  }))
}
  

  render() {
    


    return (
      <>
    <Title/>
    <Form
    onSubmit={this.handleSubmit}
    onChange={this.handleChange}
    name={this.state.name}
    number={this.state.number}
    />
    <Contacts contacts={this.state.contacts}/>
      </>
    );
  }
}

export default App;
