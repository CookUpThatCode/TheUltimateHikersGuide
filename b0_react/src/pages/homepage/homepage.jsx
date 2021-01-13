import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header';
import TrailsView from '../../components/trailsview/trailsview';


// import Directory from '../../components/directory/directory.component';

import './homepage.css';

const HomePage = () => (
   <div className='homepage'>
      <Header currentPg="home" />
      <TrailsView list="beginner" />
      <TrailsView list="popular" />
   </div>
);

export default HomePage;