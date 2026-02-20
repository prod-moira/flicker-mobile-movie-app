export interface Movie {
    id: number;
    title: string;
    poster_path: string | null;
    backdrop_path: string | null;
    release_date: string;
    vote_average: number;
    vote_count: number;
    overview: string;
    popularity: number;
    original_language: string;
    genre_ids: number[];
    adult: boolean;
}

export interface MovieDetails {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    release_date: string;
    runtime: number;
    vote_average: number;
    vote_count: number;
    genres: { id: number; name: string }[];
    original_language: string;
    original_title: string;
    popularity: number;
    status: string;
    tagline: string;
    budget: number;
    revenue: number;
    homepage: string | null;
    imdb_id: string | null;
    production_companies: {
        id: number;
        name: string;
        logo_path: string | null;
        origin_country: string;
    }[];
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
}