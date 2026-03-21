import star from '@/assets/icons/star.png';
import { MovieDetails as MovieDetailsType } from '@/interfaces/movie';
import globalStyles from '@/styles/globalStyles';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const MovieDetails = ({ movie }: { movie: MovieDetailsType | null }) => {
  if (!movie) return null;

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

return (
<ScrollView style={globalStyles.movieDetailsContainer}>
  <Image 
    source={{ uri: posterUrl }} 
    style={globalStyles.movieDetailsPoster} 
    resizeMode="cover"
  />
  <View style={globalStyles.movieDetailsContent}>
    <Text style={globalStyles.movieDetailsTitle}>{movie.title}</Text>

    <View style={globalStyles.movieDetailsMeta}>
      <Text style={globalStyles.movieDetailsMetaText}>
        {movie.release_date?.split('-')[0]}
      </Text>
      <Image source={star} style={{ width: 12, height: 12 }} />
      <Text style={globalStyles.movieDetailsMetaText}>
        {Math.round(movie.vote_average / 2)} / 5
      </Text>
      {/* {movie.adult && (
        <Image source={adult} style={{ width: 20, height: 20 }} resizeMode="contain" />
      )} */}
    </View>

    <Text style={globalStyles.movieDetailsOverview}>{movie.overview}</Text>

    <TouchableOpacity style={globalStyles.movieDetailsButton}>
      <Text style={globalStyles.movieDetailsButtonText}>+ Add to Watchlist</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
);
}

export default MovieDetails;