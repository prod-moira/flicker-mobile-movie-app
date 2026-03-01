import { StyleSheet } from 'react-native';


const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b', // off-white like the inspo
    padding: 10,
  },

flicker: {
    fontSize: 32,
    color: '#f3f3f3',
    fontWeight: '300',
    letterSpacing: 3,
    // textTransform: 'uppercase',
    textAlign: 'center',
    // marginBottom: 20,
    fontFamily: 'CormorantGaramond_300Light', // or 400Regular
},
heading: {
    fontSize: 18,
    color: '#dadada',
    fontWeight: '300',
    letterSpacing: 0.8,
    // textTransform: 'uppercase',
    fontFamily: 'DMSans_400Regular',
    paddingBottom: 1,
    borderBottomColor: "#6a6a6a",
    borderBottomWidth: 0.5,
    marginBottom: 10
},
carouselText: {
    fontSize: 10,
    color: '#e2e2e2',
    fontWeight: '500',
    fontStyle: 'normal',
    marginTop: 4,
    textAlign: 'center',
    letterSpacing: 1,
    // textTransform: 'uppercase',
    fontFamily: 'DMSans_500Medium',
    width: 120, 
},
movieCardText: {
    textAlign: 'left',
    fontSize: 12,
    width: 100,
    color: 'white',
    fontWeight: 500,
    fontFamily: 'DMSans_500Medium',
    marginTop: 3,
},
searchBar: {
    height: 40,
    minHeight: 40,
    maxHeight: 50,
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 10,
    fontFamily: 'DMSans_500Medium',
    paddingHorizontal: 12,
    backgroundColor: 'white',
    marginBottom: 15,
    color: '#1a1a1a',
    marginTop: 20
},

searchMoviesWrap: {
    justifyContent: 'center',
    gap: 20,
    paddingRight: 5,
    marginBottom: 10,
    marginTop: 2
}
});

export default globalStyles;