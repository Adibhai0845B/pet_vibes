import React from 'react';
import Header from './Header';
import Services from './Services';
import AboutUs from './AboutUs';
import ContactForm from './ContactForm';
import Reviews from './Reviews';
import Blogs from './Blogs';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <AboutUs />
      <ContactForm />
      <Reviews />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
