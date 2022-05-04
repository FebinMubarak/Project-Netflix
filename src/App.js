import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import "./App.css"
import {Originals,Action} from "./urls"
import Banner from './Components/Banner/Banner';
import RawPost from './Components/RawPost/RawPost';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RawPost url={Originals} title='Netflix Originals'/>
      
      <RawPost url={Action} title='Action' isSmall/>
    </div>
  );
}

export default App;
