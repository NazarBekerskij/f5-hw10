import { Component } from "react";

class Fillter extends Component {
  
    render(){
          const {onFilter} = this.props
        return(
            <input type="text" onChange={(evt) => onFilter(event.target.value)} />
        )
    }
}


export default Fillter




// Filter - інпут для фільтрування завдань