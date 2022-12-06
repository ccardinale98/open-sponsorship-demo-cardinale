import React, { useState } from 'react';
import './App.css';
import { Form } from './pages/Form/Form.js';
import { List } from './pages/List/List';
import { Profile } from './pages/Profile/Profile';

function App() {
  const [page, setPage] = useState("form");
  const [athlete, setAthlete] = useState({});

  function changePage(page) {
    setPage(page);
  }

  function specificAthlete(chosenAthlete) {
    setAthlete(chosenAthlete);
    setPage("profile");
  }

  return (
    /**
     * TODO: create a login page
     * used for individualized athlete lists
     */
    <div className='App'>
      <header className='App-header'>
        {page == "form" 
          ? <Form changePage={changePage} />
          : page == "list" ? <List specificAthlete={specificAthlete} />
          : <Profile changePage={changePage} athlete={athlete} />
        }
      </header>
    </div>
  );
}

export default App;
