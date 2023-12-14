import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  getNewContact = newContact => {
    const alredyInContacts = this.state.some(
      contact => contact.name === newContact.name
    );

    if (alredyInContacts) {
      return alert(`${newContact.name} is already in contact.`);
    }

    this.setState(prevState => ({
      contacts: [...prevState, newContact],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
      </div>
    );
  }
}
