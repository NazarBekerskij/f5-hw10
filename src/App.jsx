import './App.css'
import { Component } from 'react'


class App extends Component{
  state = {
    inputeValue: "",
    contacts: []
  }

  handleInputeValue = (e) => {
    const text = e.target.value

    this.setState({
      inputeValue: text
    }) 
  }


  handleAddContact = () => {
    if (this.state.inputeValue.trim() === "") return;

   this.setState((prevState) => ({
    contacts: [...prevState.contacts, prevState.inputeValue],
    inputeValue: ""
   }))
  }

  render(){
    return(
      <>
      <div>
        <input type="text" value={this.state.inputeValue} placeholder='ведіть що небудь' onChange={this.handleInputeValue} />
        <p>те що ви ввели: {this.state.inputeValue}</p>
      </div>

      <button  onClick={this.handleAddContact} type='button'>Добавити контак</button>

      <h3>контакти:</h3>

      <ul>
        {this.state.contacts.map((contact, id) => (
          <li key={id}>{contact}</li>
        ))}
      </ul>
    </>
    )
  }
}



export default App