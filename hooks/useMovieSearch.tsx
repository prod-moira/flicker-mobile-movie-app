import { fetchMovies } from '@/services/api';
import useFetch from '@/services/useFetch';
import { useEffect, useState } from 'react';

export default function useMovieSearch() {
  const [search, setSearch] = useState('');

  const { data: movies, loading, error, refetch } = useFetch(
    () => fetchMovies({ query: search }),
    true // manual fetch
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search.trim()) {
        refetch();
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  return {
    search,
    setSearch,
    movies,
    loading,
    error,
  };
}