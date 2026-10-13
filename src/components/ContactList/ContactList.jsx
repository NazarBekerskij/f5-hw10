import { Component } from 'react';
import styles from './ContactList.module.css';

export class ContactList extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <>
        <h3>контакти:</h3>
        <ul className={styles.list}>
          {contacts.map((contact, id) => (
            <li className={styles.item} key={id}>
              {contact.name} {contact.secondName} {contact.email}
            </li>
          ))}
        </ul>
      </>
    );
  }
}