import React, { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Box } from './App.styled';
import { Filter } from './Filter/Filter';
export class MyCompononet extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  addContact = data => {
    const newContact = { name: data.name, number: data.number, id: nanoid() };
    const findSameContact = this.state.contacts.find(
      ({ name }) => name.toLocaleLowerCase() === newContact.name.toLowerCase()
    );

    if (findSameContact) {
      return alert(`${newContact.name} is already in contacts.`);
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Box>
        <h2>PhoneBook</h2>
        <ContactForm addPerson={this.addContact} />
        <h2>Contactlist</h2>
        <Filter onChangeFilter={this.changeFilter} value={this.state.filter} />
        <ContactList
          onClickDelete={this.deleteContact}
          contactList={visibleContacts}
        ></ContactList>
      </Box>
    );
  }
}
