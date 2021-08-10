import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import style from './Form.module.css'

export default function Form({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const nameInputId = uuidv4();
    const numberInpntId = uuidv4();
    

    const handleChange = event => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        }
    };

    const hadleSubmit = event => {
        event.preventDefault();

        if (!name || !number) {
            return;
        }

        onSubmit(name, number);
        setName('');
        setNumber('');
    };
    
        return (
            <form className={style.form} onSubmit={hadleSubmit}>
                <label className={style.label}>
                Name
                <input
                    className={style.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={name}
                    onChange={handleChange}
                    id={nameInputId}
                />
                </label>

                <label className={style.label}>
                Number
                <input
                    className={style.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={number}
                    onChange={handleChange}
                    id={numberInpntId}
                />
                </label>

                <button className={style.btn} typy="submit">Add contact</button>
            </form>
        )
    }

Form.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
};



// class Form extends Component {
//     static propTypes = {
//         name: PropTypes.string,
//         number: PropTypes.number,
//     };
    
//     state = {
//         name: '',
//         number: ''
//     };

//     nameInputId = uuidv4();
//     numberInpntId = uuidv4();

//     handleChange = event => {
//     const { name, value } = event.currentTarget;
    
//     this.setState({ [name]: value })
//     };

//     hadleSubmit = event => {
//         event.preventDefault();

//         this.props.onSubmit(this.state.name, this.state.number);

//         this.setState({ name: '', number: '' });
//     };

//         render() {
//         return (
//             <form className={style.form} onSubmit={this.hadleSubmit}>
//                 <label className={style.label} htmlFor={this.nameInputId}>
//                 Name
//                 <input
//                     className={style.input}
//                     type="text"
//                     name="name"
//                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                     title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//                     required
//                     value={this.state.name}
//                     onChange={this.handleChange}
//                     id={this.nameInputId}
//                 />
//                 </label>

//                 <label className={style.label} htmlFor={this.numberInpntId}>
//                 Number
//                 <input
//                     className={style.input}
//                     type="tel"
//                     name="number"
//                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                     title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//                     required
//                     value={this.state.number}
//                     onChange={this.handleChange}
//                     id={this.numberInpntId}
//                 />
//                 </label>

//                 <button className={style.btn} typy="submit">Add contact</button>
//             </form>
//         )
//     }
// }

// export default Form;