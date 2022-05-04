import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube';
import "./RawPost.css"
import axios from "../../axios"
import {imageUrl,API_KEY} from "../../constants/Constants"
function RawPost(props) {
    const [movies,setMovies] = useState([])
    const [urlId,seturlId] = useState("")
    useEffect(() => {
      axios.get(props.url).then(response=>{
          console.log(response.data);
          setMovies(response.data.results) })
     }, [])
    
     const HandleMovie = (id)=>{
         console.log(id)
         axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
             if(response.data.results.length!==0){
                    seturlId(response.data.results[0]);
                    console.log(response.data)
             }else{
                 console.log("Empty array");
             }
         })
     }
     const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
     
     return (
        <div className='row'>

            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>
                    <img onClick={()=>HandleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                )}
            </div>
              <YouTube videoId="2g811Eo7K8U" opts={opts} />
        </div>
    )
}




export default RawPost