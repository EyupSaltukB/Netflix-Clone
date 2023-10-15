import { useSelector } from "react-redux"
import Loading from "./Loading";
import { baseImgUrl } from "../utils/constants";
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {TbPlayerPlayFilled} from 'react-icons/tb'

const Hero = () => {
    //  store'daki movieReducer'a abone olma
    const state = useSelector((store) => store.movieReducer);

    // dizi uzunluğuna göre rastgele sayı bulma
    const i = Math.floor(Math.random() * state.popularMovies.length);

    // rastgele bir filme erişme
    const movie = state.popularMovies[i];
    console.log(movie);

    return (
        <div className="row p-4">
            {/* API'dan cevap bekleniyorsa */}
            {state.isLoading && <Loading />}

            {/* veri geldiyse arayüzü ekrana yansıt */}
            {!state.isLoading && (
                <>
                    <div className="col-md-6 d-flex flex-column align-items-center align-items-md-start justify-content-center mb-3 gap-2">
                        <h1>{movie.title}</h1>
                        <p className="lead">{movie.overview}</p>
                        <p className="text-warning fw-bold text-align-center text-md-start">IMDB : {movie.vote_average}</p>
                        <p className="fst-italic">Yayın Tarihi: {movie.release_date}</p>
                        <div className="d-flex gap-2">
                            <button className="btn btn-light fw-bold"><TbPlayerPlayFilled/> Film İzle</button>
                            <button className="btn btn-secondary fw-bold"><AiOutlineInfoCircle/> Daha Fazla Bilgi</button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img className="img-fluid rounded shadow" src={baseImgUrl.concat(movie.backdrop_path)} alt="" />
                    </div>
                </>
            )}
        </div>
    )
}

export default Hero;