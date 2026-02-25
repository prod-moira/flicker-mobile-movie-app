import MovieDetails from '@/components/MovieDetails';
import { fetchMovieDetails } from '@/services/api';
import useFetch from '@/services/useFetch';
import globalStyles from '@/styles/globalStyles';
import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Text, View } from 'react-native';

export default function MoviePage() {
  const { id } = useLocalSearchParams();

  const { data: movie, loading, error } = useFetch(() =>
    fetchMovieDetails(id as string), true, [id]
  );

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={globalStyles.container}>
      <MovieDetails movie={movie} />
    </View>
  );
}