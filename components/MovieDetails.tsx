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

      {movie.vote_count > 0 && (
        <View style={{ flexDirection: 'row', gap: 2 }}>
          {Array.from({ length: Math.round(movie.vote_average / 2) }).map((_, i) => (
            <Image key={i} source={star} style={{ width: 17, height: 17 }} />
          ))}
          {/* <Text style={globalStyles.movieDetailsMetaText}>
            {Math.round(movie.vote_average / 2)}
          </Text> */}
        </View>
      )}
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