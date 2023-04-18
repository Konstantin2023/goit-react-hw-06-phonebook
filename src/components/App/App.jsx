import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from '../GlobalStyle';
import PhonebookSection from '../PhonebookSection';
import { Wrapper } from './App.styled';

export default function App() {
  return (
    <Wrapper>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <PhonebookSection mainTitle="Phonebook" title="Contacts" />
      <GlobalStyle />
    </Wrapper>
  );
}
//
