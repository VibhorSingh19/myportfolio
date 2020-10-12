import React from 'react';
import './App.css';
import MyNavbar from './components/my-navbar/mynavbar.component';
import MyCarousal from './components/my-carousal/my-carousal.component';
import TitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';

const App = () => {
  return (
    <div >
      <MyNavbar/>
      <MyCarousal/>
      <TitleMessage/>
      <About />
    </div>
  );
}

export default App;
