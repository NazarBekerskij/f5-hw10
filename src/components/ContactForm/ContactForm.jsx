import { Component } from "react";
import styles from "./ContactForm.module.css";

export class ContactForm extends Component {
    render() {
        const { name, secondName, email, handleChange, handleAddContacts } = this.props;

        return (
            <form className={styles.form}>
                <input 
                    className={styles.input}
                    type="text" 
                    name='name' 
                    onChange={handleChange} 
                    value={name} 
                    placeholder='ведіть ваше імя'
                />
                <input 
                    className={styles.input}
                    type="text" 
                    name='secondName' 
                    onChange={handleChange} 
                    value={secondName} 
                    placeholder='ведіть ваше прізвище'
                />
                <input 
                    className={styles.input}
                    type="email" 
                    name='email' 
                    onChange={handleChange} 
                    value={email} 
                    placeholder='ведіть вашу пошту'
                />
                <button 
                    className={styles.button} 
                    onClick={handleAddContacts} 
                    type='button'
                >
                    добавити
                </button>
            </form>
        )
    }
}