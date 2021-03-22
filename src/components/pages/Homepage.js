import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import db from '../../firebase/firebase.utils';
import { setItems } from '../../features/itemsSlice';

import Header from '../Header';
import CardsContainer from '../CardsContainer';
import Footer from '../Footer';

import './Homepage.css';

const Homepage = () => {
  const [itemsData, setItemsData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection('items').onSnapshot(snapshot => {
      setItemsData(snapshot.docs.map(doc => doc.data()));
    });
  }, []);
  dispatch(setItems(itemsData));

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
