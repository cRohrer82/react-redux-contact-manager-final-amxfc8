import React from 'react';
import { connect } from 'react-redux';

function ContactsList(props) {

  const arr0 = props.contacts;
  const arr1 = props.addresses;
  const arr2 = props.phoneNumbers;
  const listContacts = arr0.map((value, key) => (
    <div key={key} class="contactName">
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
      <li>
        {listContacts[i]}
        {listAddresses[i]}
        {listPhoneNumbers[i]}
      </li>
    );
  }

  return (
    <>
      <div class="listHeader">
        <h2 class="listHeader_name">Name</h2>
        <h2 class="listHeader_address">Address</h2>
        <h2 class="listHeader_phoneNumber">Phone Number</h2>
      </div>
      <ul>{returnList}</ul>
    </>
  );
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts,
    addresses: state.addresses,
    phoneNumbers: state.phoneNumbers,
  };
}

export default connect(mapStateToProps)(ContactsList);
