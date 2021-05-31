
import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
   const [people, setPeople] = useState(data)
  return (
    <main>
      <secction className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people}/>
        <button onClick={()=>setPeople([])}>
          Clear All
        </button>
      </secction>
    </main>
  );
}

export default App;
