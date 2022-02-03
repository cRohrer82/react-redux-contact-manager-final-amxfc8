import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../../../actions';

function EditForm(props) {
  const [person, setPerson] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  function handleSubmit(e) {
    if (person !== '') {
      props.addContact(person, number, address);
      setAddress('');
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
          placeholder="Add new address"
          onChange={handleAddressChange}
          value={address || ''}
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
    </>
  );
}

const mapDipatchToProps = {
  addContact,
};

export default connect(null, mapDipatchToProps)(EditForm);
