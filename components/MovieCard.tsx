import star from '@/assets/icons/star.png';
import { Link } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

const MovieCard = ({ movie }: { movie: Movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const movieTitle = `${movie.title}`

//   return (
//     <View>
//       <Image source={{ uri: posterUrl }} style={{ width: 100, height: 150 }} />
//         <Text style ={{
//         textAlign: 'center',
//         fontSize: 10,
//         width: 100
//         }}>{movieTitle}</Text>
//     </View>
//   );
// };
  return (
    <View>
     <Link href={`/movies/${movie.id}` as any} asChild>
     <TouchableOpacity>
        <Image source={{
            uri: posterUrl ?? 'https://placehold.co/600x400/1a1a1a/ffffff.png'
        }}
        style={{
            height: 150,
            width:100,
            borderRadius: 3
        }}/>
        
        <Text 
        numberOfLines={1}
        
        style ={{
        textAlign: 'left',
        fontSize: 12,
        width: 100,
        color: 'black',
        fontWeight: 600,
        fontFamily: 'Arial',
        marginTop: 3,
        }}>{movieTitle}</Text>

        {/* Ratings */}
        <View style={{ display: 'flex', flexDirection: 'row'}}>
            <Image source={star} style={{ width: 12, height: 12}} /> 
            <Text style={{ fontSize: 10 }}>{Math.round(movie.vote_average/2)}</Text>
        </View>

        <Text style={{ fontSize: 9 }}>{movie.release_date?.split('-')[0]}</Text>

     </TouchableOpacity>
     </Link>
    </View>
  )}


export default MovieCard