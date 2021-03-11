import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Homepage from './components/pages/Homepage';
import db from './firebase/firebase.utils';
import { setItems } from './features/itemsSlice';

function App() {
  const [fireStoreData, setFireStoreData] = useState([]);

  const dispatch = useDispatch();

  (function () {
    db.collection('items').onSnapshot(snapshot => {
      setFireStoreData(snapshot.docs.map(doc => doc.data()));
    });
  })();
  dispatch(setItems(fireStoreData));

  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
