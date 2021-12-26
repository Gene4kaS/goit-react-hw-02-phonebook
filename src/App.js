import './App.css';
import React, { Component } from 'react';
import Phonebook from './components/Phonebook';
import shortid from 'shortid';
import ContactsList from './components/ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = text => {
    const contact = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  toggleCompleted = contactId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));

    this.setState(({ contacts }) => ({
      contacts: contacts.map(contact =>
        contact.id === contactId
          ? { ...contact, completed: !contact.completed }
          : contact,
      ),
    }));
  };

  render() {
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <Phonebook onAddContact={this.addContact} />

          <h2>Contacts</h2>
          <ContactsList onToggleCompleted={this.toggleCompleted} />
        </div>
      </>
    );
  }
}

export default App;
