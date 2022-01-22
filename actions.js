// Action Creator
export function addContact(person, number, address) {
  return {
    type: 'ADD_CONTACT',
    person: person,
    address: address,
    number: number,
  };
}

export function editPersonNumber(person, number, address) {
  return {
    type: 'EDIT_CONTACT',
    person: person,
    address: address,
    number: number,
  };
}
