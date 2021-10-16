import axios from "axios";
import { useEffect, useState } from "react";
import Singlecontent from "../../components/SingleContent/SingleContent";
import './Trending.css';

const Trending  = () => {

    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);

    const fetchTrending = async () => {
        const { data } = await axios.get(
           `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        );

        console.log(data);
        setContent(data.results);
    };

    // useEffect(() => {
    //     return () => {
    //         fetchTrending();
    //     };
    // }, []); 

    useEffect(() =>{
        fetchTrending();
    }, []);
    
    return (
        <div>
            <span className='pageTitle'>Trending</span>
            <div className = "trending">
                {
                    content && content.map((c) => 
                        <Singlecontent key={c.id}
                        id={c.id}
                        poster = {c.poster_path}
                        title = {c.title || c.name}
                        date={c.first_air_date || c.release_date}
                        media_type = {c.media_type}
                        vote_average = {c.vote_average}/>
                    )
                }
            </div>
            <CustomPagination/>
        </div>
    )
}

export default Trending;