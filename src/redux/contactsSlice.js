import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { deleteContact, addContact } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts-list',
  storage,
};

export const persisterContactsReduser = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
