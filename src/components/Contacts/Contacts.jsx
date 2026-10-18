import { Component } from "react";


class Contacts extends Component {
    render(){
        const {contacts} = this.props
        return(
            <>
            <h2>Contacts</h2>
            <ul>{contacts.map(({id, name, number}) => {
                return(
                    <li key={id}>
                        {name}: {number}
                    </li>
                )
            })}</ul>
            </>
        )
    }
}







export default Contacts