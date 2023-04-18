import PropTypes from 'prop-types';
import { Button } from './ContactItem.styled';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <>
      <span>{name}: </span>
      <span>{number}</span>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
