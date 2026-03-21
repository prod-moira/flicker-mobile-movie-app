import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b', // off-white like the inspo
    paddingHorizontal: 10,
  },

flickerContainer: {
  backgroundColor: '#1b1b1b', 
  paddingVertical: 12, 
  alignItems: 'center',
  elevation: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 1,
  shadowRadius: 4,
  flexDirection: 'row',
  gap: 5,
  justifyContent: 'center'
},

flicker: {
    fontSize: 30,
    color: '#f3f3f3',
    fontWeight: '500',
    letterSpacing: 0,
    // textTransform: 'uppercase',
    textAlign: 'center',
    // marginBottom: 20,
    fontFamily: 'DMSans_500Regular', // or 400Regular
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
    height: 30,
    minHeight: 40,
    maxHeight: 30,
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
    justifyContent: 'flex-start',
    gap: 20,
    paddingHorizontal: 10, // add this to push everything from the left edge
    marginBottom: 10,
    marginTop: 2
},
});

export default globalStyles;