import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export const useFilteredContacts = () => {
  return useSelector(selectFilteredContacts);
};
