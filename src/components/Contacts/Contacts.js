import React from 'react';
import Contact from '../Contact/Contact'
import PropTypes from 'prop-types';
import style from './Contacts.module.css'

const Contacts = ({contacts, onDeleteContact}) => (
    <ul className={style.list}>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={style.item}>
                <Contact
                    name={name}
                    number={number}
                    onDeleteContact={() => onDeleteContact(id)}
                />
        </li>
        ))}
        
    </ul>
);

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;