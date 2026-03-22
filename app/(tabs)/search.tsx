import logo from '@/assets/icons/logo.png';
import MovieCard from '@/components/MovieCard';
import useMovieSearch from '@/hooks/useMovieSearch';
import globalStyles from '@/styles/globalStyles';
import React from 'react';
import { FlatList, Image, Text, TextInput, View } from 'react-native';

const Search = () => {
  const { search, setSearch, movies, loading, error } = useMovieSearch();

  return (
    <>
    <View style={globalStyles.flickerContainer}>
      <Image 
        source={logo}
        style={{ width: 24, height: 24 }} 
        resizeMode="contain"
      />
      <Text style={globalStyles.flicker}>flicker</Text>
    </View>
    <View style={globalStyles.container}>

      <TextInput
        style={globalStyles.searchBar}
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
        placeholderTextColor="#888"
      />

      { loading && <Text style={globalStyles.loadingAndErrorText}>Loading...</Text> }
      { error && <Text style={globalStyles.loadingAndErrorText}>Error: {error.message}</Text> }

    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <MovieCard movie={item}/>}
      numColumns={3}
      columnWrapperStyle={globalStyles.searchMoviesWrap}
      showsVerticalScrollIndicator={false}
    />
    </View>
    </>
  );
};

export default Search;