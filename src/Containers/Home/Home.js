import React from 'react';

import Header from '../../Components/Header/Header'
import Slogans from '../../Components/Slogans/Slogans'
import Issues from '../../Components/Issues/Issues'
import Donate from '../../Components/Donate/Donate'
import AboutSection from '../../Components/AboutSection/AboutSection'
import ContactForm from '../../Components/ContactForm/ContactForm'
import Footer from '../../Components/Footer/Footer'


import './Home.css';


function Home() {
  return (
    <div>
      <Header />
      <Slogans />
      <Issues />
      <Donate />
      <AboutSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
