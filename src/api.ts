const API_KEY = "02d3556153782f3bf416b2cbc9a89bcc"
const BASE_PATH = "https://api.themoviedb.org/3/"

interface IMovie {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
}

export interface IGetMoviesResult {
    dates: {
        maximum: string;
        minimum: string;
    }
    page: number;
    results: IMovie[];
    total_pages: number;
    total_result: number;
}

export async function getMovies() {
    const response = await fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`);
    return await response.json();
}