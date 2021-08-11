import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from './components/Container';
import Form from './components/Form';
import Filter from './components/Filter';
import Contacts from './components/Contacts';

const initialContacts = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts});
    
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const addContact = ( name, number ) => {
    
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (contacts.map(contact => contact.name).includes(name)) {
      alert(`${name} is already in contacs.`)
    } else {
      setContacts(prevState => [contact, ...prevState]);
    }
  };
      

  const  changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    

    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  }
  

  const deleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  return (
      <Container>

        <h1>Phonebook</h1>

        <Form onSubmit={addContact} />

        <h2>Contacts</h2>

        <Filter
          value={filter}
          onChange={changeFilter}
          />

        <Contacts
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
        
      </Container>
    )
  }

