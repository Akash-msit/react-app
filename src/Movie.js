const  Movie = ({m}) =>{
    return(
        <li className="movie" key={m.id}>
        <img src={m.poster} alt="movie-img"></img>
        <p>
            <b>{m.title}</b> by <b>{m.director}</b> was released on {m.year}
        </p>
        <p>
            <b>Rating:</b> {m.rating}
        </p>
        <p>
            <b>Runtime:</b> {m.runtime}
        </p>

    </li>

    )
};
export default Movie;