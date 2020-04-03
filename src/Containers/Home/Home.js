import React from 'react';

import Header from '../../Components/Header/Header'
// import Slogans from '../../Components/Slogans/Slogans'
import Issues from '../../Components/Issues/Issues'
import SignUp from '../../Components/SignUp/SignUp'
import AboutSection from '../../Components/AboutSection/AboutSection'
import MessageForm from '../../Components/MessageForm/MessageForm'
import Footer from '../../Components/Footer/Footer'


import './Home.css';


function Home() {
  return (
    <div>
      <Header />
      <SignUp />
      <AboutSection />
      <Issues />
      <MessageForm />
      <Footer />
    </div>
  );
}

export default Home;
