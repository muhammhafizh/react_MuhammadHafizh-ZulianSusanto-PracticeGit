import AboutPage from './components/About';
import ContactPage from './components/Contact';
import FooterPage from './components/Footer';
import HomePage from './components/Home';
import NavbarComponent from './components/Navbar';

function App() {
  return (
    <>
      <NavbarComponent />
      <HomePage />
      <AboutPage />
      <ContactPage />
      <FooterPage />
    </>
  );
}

export default App;
