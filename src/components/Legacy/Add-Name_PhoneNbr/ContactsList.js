import React from 'react';
import { connect } from 'react-redux';

function ContactsList(props) {
  const arr = props.contacts;
  const arr1 = props.phoneNumbers;
  const listContacts = arr.map((val, index) => (
    <div key={index} class="CN">
      {val}
    </div>
  ));
  const listPhoneNumbers = arr1.map((val, index) => (
    <div key={index} class="PN">
      {val}
    </div>
  ));
  var returnList = [];

  for (var i = 0; i < listContacts.length; i++) {
    returnList.push(
      <>
        <li>
          {listContacts[i]}
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
    phoneNumbers: state.phoneNumbers,
  };
}

export default connect(mapStateToProps)(ContactsList);
