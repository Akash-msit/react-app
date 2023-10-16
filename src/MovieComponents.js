import { movies } from "./data/movies";
import Movie from "./Movie";
import './movies.css';
const fetchMoiveData=()=>{
    return movies;
}
const MovieComponents = () =>{
    const movieData = fetchMoiveData();

    return(
        <div>
            <div className="m-style">
                <h1>MOVIES</h1>
            </div>
        <div className ="movie-container">
          <ul className="movie-list">
            {
                movieData.map((movie)=>(
                    <Movie m={movie}/>
                )

                )
            }
          </ul> 
          </div>
        </div>
    )
  }

  export default MovieComponents;