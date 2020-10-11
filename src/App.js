import React from 'react';
import './App.css';
import MyNavbar from './components/my-navbar/mynavbar.component';
import MyCarousal from './components/my-carousal/my-carousal.component';

const App = () => {
  return (
    <div >
      <MyNavbar/>
      <MyCarousal/>
      
      My Portfolio
    </div>
  );
}

export default App;
