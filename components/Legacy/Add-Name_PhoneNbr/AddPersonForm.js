import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions';

function AddPersonForm(props) {
  const [person, setPerson] = useState('');
  const [number, setNumber] = useState('');

  function handlePersonChange(e) {
    setPerson(e.target.value);
  }

  function handleNumberChange(e) {
    setNumber(e.target.value);
  }

  function handleSubmit(e) {
    if (person !== '') {
      props.addContact(person, number);
      setNumber('');
      setPerson('');
    }
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          class="formInput"
          placeholder="Add new contact"
          onChange={handlePersonChange}
          value={person}
        />
        <input
          type="text"
          class="formInput"
          placeholder="Add new phone number"
          onChange={handleNumberChange}
          value={number || ''}
        />
        <button type="submit" class="addButton">
          Add
        </button>
      </form>
      <hr id="top" />
    </>
  );
}

const mapDipatchToProps = {
  addContact,
};

export default connect(null, mapDipatchToProps)(AddPersonForm);