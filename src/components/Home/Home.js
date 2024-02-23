import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import Timeline from './timeline/Timeline';
import Widget from './widget/Widget';
import './Home.css';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/');
      console.log("Signed out successfully");
    }).catch ((err) => {
      alert(err);
    })
  }

 
  return (
    <div className='home'>
      {/* Sidebar */}
      <Sidebar handleLogout={handleLogout}/>

      {/* Timeline */}
      <Timeline />

      {/* Widget */}
      <Widget />
    </div>
  );
}

export default Home;
