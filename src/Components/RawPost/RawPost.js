import React,{useEffect,useState} from 'react'

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
     
     
     return (
        <div className='row'>

            <h2>{props.title}</h2>
            <div className="posters">
            
                
                {movies.map((obj)=>
               
                 <img onClick={()=>HandleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.poster_path}`} alt="poster" />
                    
               )}
               
            </div>
             
        { urlId &&  <iframe className='video'
           
        title='Youtube player'
        width={"100%"}
        height={"450px"}
        
        
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/${urlId.key}?autoplay=${1},controls=none`}>
</iframe>   }
            

        </div>
    )
}




export default RawPost 