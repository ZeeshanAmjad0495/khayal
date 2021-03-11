import React from 'react';

import Header from '../Header';
import CardsContainer from '../CardsContainer';
import Footer from '../Footer';

import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="header-container">
        <Header />
      </div>
      <hr />
      <div>
        <CardsContainer />
      </div>
      <hr />
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
