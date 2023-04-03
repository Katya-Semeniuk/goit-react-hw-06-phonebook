import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactFilter from '../ContactFilter/ContactFilter';
import ContactsList from '../ContactsList/ContactsList';
import Notification from '../notification/Notification';

import { Container, MainTitle, Title, Subtitle } from './ContactPage.styled';

const ContactPage = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      {contacts.length > 0 && (
        <Subtitle>You have {contacts.length} contacts</Subtitle>
      )}
      <ContactForm />
      <Title>Contacts</Title>
      <ContactFilter />
      <ContactsList />
      <Notification />
    </Container>
  );
};

export default ContactPage;
