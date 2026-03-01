import globalStyles from '@/styles/globalStyles';
import { Dimensions, FlatList, Image, Text, View } from 'react-native';

const { width } = Dimensions.get('window');
const IMAGE_WIDTH = width * 0.3;
const IMAGE_HEIGHT = IMAGE_WIDTH * 1.5;

const MovieCarousel = ({ title, movies }: { title: string; movies: any[] }) => {
  return (
    <View style={{ marginVertical: 16 }}>
      <Text style={globalStyles.heading}>{title}</Text>
      <FlatList
        data={movies.slice(0, 10)} // Top 10
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginRight: 7 }}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT, borderRadius: 3 }}
            />
            <Text style={globalStyles.carouselText} numberOfLines={1}>
              {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default MovieCarousel;