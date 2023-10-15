import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getGenres } from "../redux/actions/movieActions";
import Hero from "../components/Hero";
import MovieList from './../components/MovieList';

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.movieReducer);

  useEffect(() => {
    //  popüler filmleri alma
    dispatch(getMovies());

    // kategorilere erişme 
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />
      {/* her bir kategori için 
      kategoriye ait filmleri önce API'dan alıp sonra 
      ekrana yansıtacak bileşeni yansıtma
      */}
      {state.genres.map((genre) =>  
      (<MovieList key={genre.id} genre={genre}/>
      ))}
    </div>
  )
}

export default MainPage;