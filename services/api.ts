import { MovieDetails } from "@/interfaces/movie"

export const TMDB_CONFIG =  {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies = async ({ query }: { query: string}) => {
    const endpoint = query ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` 
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    })

    if(!response.ok){
        throw new Error(`Failed to fetch movies: ${response.statusText}`)
    }

    const data = await response.json();
    return data.results;
}

export const fetchMovieDetails = async (movieId: string): Promise<MovieDetails> => {
    try {
        const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`, {
            method: 'GET',
            headers: TMDB_CONFIG.headers,
        });

        if(!response.ok){
        throw new Error(`Failed to fetch movies details`);
    }

        const data = await response.json()
        return data;

    } catch (error) {
            console.log(error);
            throw error;  }
}

export const fetchIndexMovies = async () => {
    const popularMoviesEndpoint = `${TMDB_CONFIG.BASE_URL}/movie/popular`;
    const topRatedMoviesEndpoint = `${TMDB_CONFIG.BASE_URL}/movie/top_rated`;
    const upcomingMoviesEndpoint = `${TMDB_CONFIG.BASE_URL}/movie/upcoming`;


    const [popularRes, upcomingRes, topRatedRes] = await Promise.all([
    fetch(popularMoviesEndpoint, { method: 'GET', headers: TMDB_CONFIG.headers }),
    fetch(upcomingMoviesEndpoint, { method: 'GET', headers: TMDB_CONFIG.headers }),
    fetch(topRatedMoviesEndpoint, { method: 'GET', headers: TMDB_CONFIG.headers }),
    ]);

    if(!popularRes.ok){
        throw new Error(`Failed to fetch popular movies`);
    } else if(!upcomingRes.ok){
        throw new Error(`Failed to fetch upcoming movies`);
    } else if(!topRatedRes.ok){
        throw new Error(`Failed to fetch top rated movies`);
    }

    const popularData = await popularRes.json();
    const upcomingData = await upcomingRes.json();
    const topRatedData = await topRatedRes.json();

    return {
    popular: popularData.results,
    upcoming: upcomingData.results,
    topRated: topRatedData.results,
    };
}