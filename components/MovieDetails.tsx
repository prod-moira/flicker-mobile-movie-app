import { MovieDetails as MovieDetailsType } from '@/interfaces/movie';
import { Image, Text, View } from 'react-native';

const MovieDetails = ({ movie }: { movie: MovieDetailsType | null }) => {
  if (!movie) return null;

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View>
      <Image source={{ uri: posterUrl }} style={{ width: 300, height: 400 }} />
      <Text>{movie.title}</Text>
      <Text>{movie.release_date?.split('-')[0]}</Text>
      <Text>{Math.round(movie.vote_average / 2)} / 5</Text>
      <Text>{movie.overview}</Text>
    </View>
  );
}

export default MovieDetails;