import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/Constants'
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(()=>{ async function fetchdata(){
      axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
       setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length-1)
      ])
       return response
    }
       
     )}
     fetchdata()
     
  },[])
  return (
    
      
    <div style = {{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}}
     className='banner'>

        <div className='content'>
             <h1 className='title'>{movie?movie.title:""}</h1>
             <div className="banner-buttons">
                 <button className="button">Play</button>
                 
                 <button className="button">My list</button>
             </div>
             <h1 className='description'>{movie?movie.overview:""}</h1>
        </div>
        <div className="fade-bottom"></div>
    </div>
    

  )
}

export default Banner