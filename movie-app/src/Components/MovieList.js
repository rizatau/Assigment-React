import MovieCard from "./MovieCard";

export default function MovieList({movies, setMovies}) {
    return(
        <div className="movie-grid">
            {movies.map((movie,index) => (
                <MovieCard key={index} movie={movie} setMovies={setMovies} />
            ))}
        </div>
    )
}