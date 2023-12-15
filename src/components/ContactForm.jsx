import styled from 'styled-components';

export const ContactForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
        />
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
        />
        <Button type="submit">Add contact</Button>
      </Label>
    </form>
  );
};

const Label = styled.label`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  background-color: aliceblue;
  padding: 30px 10px;
`;

const Button = styled.button`
  cursor: pointer;
  margin: 10px auto 0;
  width: 100px;
  border: 1px solid black;
  border-radius: 2px;
  background-color: lavender;

  &:hover {
    cursor: pointer;
    background-color: blueviolet;
    color: white;
  }
`;
