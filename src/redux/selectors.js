export const getContacts = state => state.contacts; // Returns the list of contacts from the state

export const getFilter = state => state.filter; // Returns the current filter from the state

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filterText = getFilter(state);
  const normalizedFilter = filterText.toLowerCase();

// Filters contacts to return only those whose names contain the filter substring
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};