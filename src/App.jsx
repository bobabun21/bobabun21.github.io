import './App.css';
import React from 'react';
import photo from './assets/profile-photo-web-page.JPG';
import ProfilePhoto from './PagePhoto';

function App() {
  return (
    <div className='App'>
      <ProfilePhoto photo={photo} />
    </div>
  );
}

export default App;
