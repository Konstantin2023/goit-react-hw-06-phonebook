import PropTypes from 'prop-types';
import ContactForm from '../ContactForm';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import { Section, Title, Subtitle, Container } from './PhonebookSection.styled';

function PhonebookSection({ mainTitle, title }) {
  return (
    <>
      <Title>{mainTitle}</Title>
      <Section>
        <ContactForm />
        <Container>
          <Subtitle>{title}</Subtitle>
          <Filter />
          <ContactsList />
        </Container>
      </Section>
    </>
  );
}

PhonebookSection.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PhonebookSection;
