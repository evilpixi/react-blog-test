import React from 'react';
import './components/PageHeader'
import PageHeader from './components/PageHeader'
import Entries from './components/Entries'

function App() {
  return (
    <div className="App">
      <PageHeader></PageHeader>
      <Entries></Entries>
    </div>
  );
}

export default App;
