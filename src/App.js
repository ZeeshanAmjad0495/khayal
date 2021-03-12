import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Homepage from './components/pages/Homepage';
import Cart from './components/pages/Cart';
import db from './firebase/firebase.utils';
import { setItems } from './features/itemsSlice';

function App() {
  const dispatch = useDispatch();
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    db.collection('items').onSnapshot(snapshot => {
      setItemsData(snapshot.docs.map(doc => doc.data()));
    });
    dispatch(setItems(itemsData));
  }, [dispatch, itemsData]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
