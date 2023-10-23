import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const phoneContacts = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: phoneContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(newContact) {
        return {
          payload: { id: nanoid(), ...newContact },
        };
      },
    },
    removeContact(state, action) {
      const index = state.findIndex(
        contact => contact.id !== action.payload
      );
      state.splice(index, 1);
    },
  },
});

// Export addContact and removeContact actions from slice contacts
export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;