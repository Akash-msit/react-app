import { movies } from "./data/movies";
import Movie from "./Movie";
import './movies.css';
const fetchMoiveData=()=>{
    return movies;
}
const MovieComponents = () =>{
    const movieData = fetchMoiveData();

    return(
        <div className ="movie-container">
          <h2>MOVIES</h2> 
          <ul className="movie-list">
            {
                movieData.map((movie)=>(
                    <Movie m={movie}/>
                )

                )
            }
          </ul> 

        </div>
    )
  }

  export default MovieComponents;