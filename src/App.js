import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import "./App.css"
import {Originals,Action, Horror, Romance, Comedy} from "./urls"
import Banner from './Components/Banner/Banner';
import RawPost from './Components/RawPost/RawPost';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RawPost url={Action} title='Action' />
      <RawPost url={Horror} title='Horror' isSmall/>
      <RawPost url={Romance} title='Romance' isSmall/>
      <RawPost url={Comedy} title='Comedy' isSmall/>
      <RawPost url={Originals} title='Netflix Originals' isSmall/>
      
      
      
      
    </div>
  );
}

export default App;
