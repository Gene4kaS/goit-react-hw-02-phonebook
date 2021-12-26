import './App.css';
import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import shortid from 'shortid';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const { contacts } = this.state;
    const { name, number } = data;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (contacts.some(({ name }) => name === contact.name)) {
      alert(`Sorry, ${name} already exists`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    const state = this.state;
    const visibleContacts = state.contacts.filter(
      contact => contact.id !== contactId,
    );
    this.setState({ contacts: visibleContacts });
    return visibleContacts;
  };

  onFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return (
      <>
        <div className="phonebook">
          <h1>Phonebook</h1>
          <ContactForm onAddContact={this.addContact} />
          <Filter value={filter} onChange={this.onFilter} />
          <h2>Contacts</h2>
          <ContactsList
            contacts={visibleContacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </>
    );
  }
}

export default App;
