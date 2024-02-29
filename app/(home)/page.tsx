import { Metadata } from "next"
import styles from "../../styles/home.module.css"
import Movie from "../../components/movie";

export const metadata : Metadata = {
    title :"HOME"
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies(){
    // await new Promise(res => setTimeout(res, 1000))
    const response = await fetch(API_URL);
    const json = await response.json()
    return json;
}

export default async function HomePage() {
    const movies = await getMovies()
    return <div className={styles.container}>
        {movies.map(movie => (
            <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}/>
        ))}
    </div>
} 