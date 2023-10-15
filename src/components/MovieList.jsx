import axios from "axios";
import { useEffect, useState } from "react";
import { baseImgUrl, options } from "../utils/constants";
import Loading from "./Loading";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        //  gelen kategoriye ait filmleri çeker
        axios.get(
            `/discover/movie?include_adult=false&include_video=false&language=en&page=1&sort_by=popularity.desc&with_genres=$(genre.id)`
            , options)
            .then((res) => setMovies(res.data.results));
    }, [])

    console.log(movies);

    return (
        <div className="p-4">
            {/* eğer filmler yüklenmediyse */}
            {!movies && <Loading />}

        {/* eğer filmler yüklendiyse */}
            {movies && (
                <>
                <h1 className="mb-3 fs-3 genre">{genre.name}</h1>
                <Splide
                options={{
                    gap: "10px",
                    autoWidth: true,
                    pagination: false,
                }}
            >
                {/* her film için bir slide oluşturma */}
                {movies?.map((movie) => (
                    <SplideSlide key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                        <img 
                        className="movie rounded shadow"
                        src={baseImgUrl.concat(movie.poster_path)} />
                    </Link>
                    </SplideSlide>
                ))};
            </Splide>
            </>
            )}
        </div>
    );
};

export default MovieList;