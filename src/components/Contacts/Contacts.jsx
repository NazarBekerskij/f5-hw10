import { Component } from "react";


class Contacts extends Component {
    render(){
        const {contacts, onDeleteContact} = this.props
        return(
            <>
            <h2>Contacts</h2>
            <ul>{contacts.map(({id, name, number}) => {
                return(
                    <li key={id}>
                        {name}: {number}

                        <button onClick={() => onDeleteContact(id)}>
                            Delete
                        </button>
                    </li>
                )
            })}</ul>
            </>
        )
    }
}







export default Contacts