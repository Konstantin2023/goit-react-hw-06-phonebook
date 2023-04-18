import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
import { List, Item } from './ContactsList.styled';
import { getContacts, getFilter } from '../../redux/selectors';

function ContactsList() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  return (
    <>
      <List>
        {contacts.contacts
          .filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ id, name, number }) => (
            <Item key={id}>
              <ContactItem id={id} name={name} number={number} />
            </Item>
          ))}
      </List>
    </>
  );
}

export default ContactsList;
