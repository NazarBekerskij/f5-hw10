import { Component } from "react";


class Contacts extends Component {
    render(){
        const {contacts, onDelete} = this.props
        return(
          <>
            <ul>{contacts.map(({id, name, number}) => {
             return(   <li key={id}>
                    {name}: {number}

                    <button type="button" onClick={() => onDelete(id)}>Delete</button>
                </li>
           ) })}</ul>
          </>
        )
    }
}







export default Contacts