import { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import styled from 'styled-components';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  nanoid = nanoid();

  // getNewContact = newContact => {
  //   const alredyInContacts = this.state.some(
  //     contact => contact.name === newContact.name
  //   );

  //   if (alredyInContacts) {
  //     return alert(`${newContact.name} is already in contact.`);
  //   }

  //   this.setState(prevState => ({
  //     contacts: [...prevState, newContact],
  //   }));
  // };
  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const {
      name: { value: name },
      number: { value: number },
    } = form.elements;

    const check = this.checkIfContactExist(name);

    if (!check) {
      const newContact = {
        id: nanoid,
        name,
        number,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
      Notiflix.Notify.success('New contact succesfully added!');
      form.reset();
    } else {
      Notiflix.Notify.warning(`${name} is already in contacts.`);
    }
  };

  checkIfContactExist = name => {
    const { contacts } = this.state;
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleDelete = id => {
    const { contacts } = this.state;
    const deleteContact = contacts.find(contact => contact.id === id);

    if (deleteContact) {
      this.setState(state => ({
        contacts: state.contacts.filter(contact => contact.id !== id),
      }));

      Notiflix.Notify.success(`${deleteContact.name} has been removed`);
    }
  };

  render() {
    const { contacts, filter } = this.state;
    const filterSearch = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Wrapper>
        <Container>
          <h1 style={{ textAlign: 'center', color: 'white' }}>Phonebook</h1>
          <ContactForm onSubmit={this.handleSubmit} />
          <h2 style={{ textAlign: 'center', color: 'white' }}>Contacts</h2>
          <Filter onChange={this.handleFilterChange} filter={filter} />
          <ContactList onClick={this.handleDelete} contacts={filterSearch} />
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  padding: 40px;
  margin: 10px;
  background-color: rgba(71, 176, 192, 0.7);
  border-radius: 5px;
`;
