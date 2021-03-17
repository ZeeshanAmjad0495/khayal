import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Homepage from './components/pages/Homepage';
import Cart from './components/pages/Cart';
import db from './firebase/firebase.utils';
import { setItems } from './features/itemsSlice';

function App() {
  const [itemsData, setItemsData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection('items').onSnapshot(snapshot => {
      setItemsData(snapshot.docs.map(doc => doc.data()));
    });
  }, []);
  dispatch(setItems(itemsData));

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
