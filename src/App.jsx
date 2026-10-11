import './App.css'
import { Component } from 'react'



class App extends Component {
 state = {
  inputValue: ""
}


  handleInputChange = (e) => {
    const text = e.target.value
    
    this.setState({inputValue: text})

    console.log(text);
    
  }
 

  render(){
      return(
        <div>
          <input type="text"  value={this.state.inputValue} onChange={this.handleInputChange} placeholder='ведіть щосб'/>
          <p>ти пишеш: {this.state.inputValue}</p>
        </div>
    )
  }
}

export default App
