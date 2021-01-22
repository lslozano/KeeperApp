import React, { useState } from 'react';

import Header from './components/Header';
import CreateNote from "./components/CreateNote";
import Notes from './components/Notes';
import Footer from './components/Footer';


const App = () => {
  const [ notes, setNotes ] = useState([]);

  return (
    <>
      <Header />
      <CreateNote setNotes={setNotes} />
      <Notes notes={notes} setNotes={setNotes} />
      <Footer />
    </>
  )
};

export default App;