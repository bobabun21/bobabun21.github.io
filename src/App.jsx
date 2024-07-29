import './App.css';
import React from 'react';
import photo from './assets/profile-photo-web-page.JPG';
import PageLayout from './pageLayout';

function App() {
  return (
    <div className='App'>
      <PageLayout photo={photo} />
    </div>
  );
}

export default App;
