import React, { useState } from 'react';
import { connect } from 'react-redux';
import editPersonNumber from '../actions';
import { AddPersonForm } from './AddPersonForm';

function ContactsList(props) {
  const [person, setPerson] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  function handleNameClick(e) {}

  const arr = props.contacts;
  const arr1 = props.addresses;
  const arr2 = props.phoneNumbers;
  const listContacts = arr.map((value, key) => (
    <div key={key} class="contactName" onClick={handleNameClick}>
      {value}
    </div>
  ));
  const listAddresses = arr1.map((value, key) => (
    <div key={key} class="contactAddress">
      {value}
    </div>
  ));
  const listPhoneNumbers = arr2.map((value, key) => (
    <div key={key} class="contactPhoneNumber">
      {value}
    </div>
  ));
  var returnList = [];

  for (var i = 0; i < listContacts.length; i++) {
    returnList.push(
      <>
        <li>
          {listContacts[i]}
          {listAddresses[i]}
          {listPhoneNumbers[i]}
        </li>
        <hr />
      </>
    );
  }

  return <ul>{returnList}</ul>;
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts,
    addresses: state.addresses,
    phoneNumbers: state.phoneNumbers,
  };
}

export default connect(mapStateToProps)(ContactsList);
