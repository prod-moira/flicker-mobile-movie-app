import MovieCarousel from '@/components/MovieCarousel';
import { fetchIndexMovies } from '@/services/api';
import { Text } from '@react-navigation/elements';
import { useEffect, useState } from "react";
import { ScrollView } from 'react-native';

const Index = () => {
  const [movies, setMovies] = useState<{
    popular: any[];
    upcoming: any[];
    topRated: any[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchIndexMovies();
        setMovies(data);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  if (loading) return <Text>Loading movies...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <ScrollView style={{ padding: 16 }}>
      <MovieCarousel title="Popular Movies" movies={movies!.popular} />
      <MovieCarousel title="Upcoming Movies" movies={movies!.upcoming} />
      <MovieCarousel title="Top Rated Movies" movies={movies!.topRated} />
    </ScrollView>
  );
};

export default Index;