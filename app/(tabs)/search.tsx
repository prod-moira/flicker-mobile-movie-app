import MovieCard from '@/components/MovieCard';
import useMovieSearch from '@/hooks/useMovieSearch';
import globalStyles from '@/styles/globalStyles';
import React from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';

const Search = () => {
  const { search, setSearch, movies, loading, error } = useMovieSearch();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.flicker}>flicker</Text>

      <TextInput
        style={globalStyles.searchBar}
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
        placeholderTextColor="#888"
      />

      { loading && <Text>Loading...</Text> }
      { error && <Text>Error: {error.message}</Text> }

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MovieCard movie={item}/>
        )}
        numColumns={3}
        columnWrapperStyle={globalStyles.searchMoviesWrap}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Search;