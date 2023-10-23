import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts';
import { filterReducer } from './filter';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});