import IMAGE_WIDTH from '@/components/MovieCarousel';
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  carouselText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 500,
    fontStyle: 'italic',
    idth: IMAGE_WIDTH, 
    marginTop: 4, 
    textAlign: 'center'
  },
    searchBar: {
    height: 75,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginBottom: 15
  },
});

export default globalStyles;