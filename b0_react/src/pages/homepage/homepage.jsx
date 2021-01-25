import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header';
import TrailsView from '../../components/trailsview/trailsview';
import SearchTrails from '../../components/searchTrails/searchTrails';
import TrailSearchResultsList from '../../components/trailSearchResultsList/trailSearchResultsList'


// import Directory from '../../components/directory/directory.component';

import './homepage.css';

const HomePage = () => {
   const [searchResults, setSearchResults] = useState([])
   const [resultIdx, setResultIdx] = useState(0);

   const nextResultsHandler = () => {
      if (resultIdx+8 < searchResults.length) {
         setResultIdx(resultIdx+8);
      }
   }

   const prevResultsHandler = () => {
      if (resultIdx-8 >= 0) {
         setResultIdx(resultIdx-8);
      }
   }

   return (
      <div className="homePage">
         <Header currentPg="home" />
         <div className="uhgTitle">
            <div className="titleLn1"><div className="smallThe">THE</div>&nbsp;ULTIMATE HIKER'S</div>
            <div className="titleLn2">GUIDE</div>
         </div>
         <SearchTrails setSearchResults={setSearchResults} setResultIdx={setResultIdx} />
         {searchResults.length > 0 && <TrailSearchResultsList results={searchResults.slice(resultIdx, resultIdx+8)} 
            nextResults={nextResultsHandler} prevResults={prevResultsHandler} resultIdx={resultIdx} numResults={searchResults.length} 
         />}
         <div className="viewerLabels">Beginner Trails</div>
         <TrailsView list="beginner" />
         <div className="viewerLabels" id="viewer2">Popular Trails</div>
         <TrailsView list="popular" />
      </div>
   )
};

export default HomePage;