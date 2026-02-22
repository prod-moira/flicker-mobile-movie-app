import MovieCard from '@/components/MovieCard';
import useMovieSearch from '@/hooks/useMovieSearch';
import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const Search = () => {
  const { search, setSearch, movies, loading, error } = useMovieSearch();

  return (
    <View style={{ padding: 20, backgroundColor: '#ededed'}}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Search</Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
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
        columnWrapperStyle={{
          justifyContent: 'flex-start',
          gap: 20,
          paddingRight: 5,
          marginBottom: 10,
          marginTop: 2
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 35,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginBottom: 15
  },
});

export default Search;