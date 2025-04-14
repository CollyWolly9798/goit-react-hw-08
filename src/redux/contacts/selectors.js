import { createSelector } from '@reduxjs/toolkit';
import { selectFilterQuery } from '../filters/selectors';
export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectFilteredContacts = createSelector([selectContacts, selectFilterQuery], (contact, filter) => {
  const normalFilter = filter.toLowerCase();
  return contact.filter(
    contact => contact.name.toLowerCase().includes(normalFilter) || contact.number.includes(normalFilter)
  );
});
