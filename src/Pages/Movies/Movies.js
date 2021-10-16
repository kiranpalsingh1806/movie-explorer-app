import { selectClasses } from "@mui/material";
import useGenres from "../../hooks/useGenres";

const [genres, setGenres] = setuseState([]);
const genreforURL = useGenres(selectedGenres);


const Movies  = () => {
    return (
        <div>
            <span className='pageTitle'>
                Movies
            </span>
        </div>
    )
}

export default Movies;