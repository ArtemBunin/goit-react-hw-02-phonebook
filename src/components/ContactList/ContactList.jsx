import PropTypes from 'prop-types';
import { Item, Btn, NumberText } from './ContactList.styled';

export const ContactList = ({ contactList, onClickDelete,}) => {
  return (
    <>
      <ul>
        {contactList.map(({ name, number, id }) => (
          <Item key={id}>
            <p>
              {name}
              <NumberText>{number}</NumberText>
            </p>
            <Btn onClick={() => onClickDelete(id)}>Delete</Btn>
          </Item>
        ))}
      </ul>
    </>
  );
};
ContactList.prototype = {
  onDelete: PropTypes.func,
  contactList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
