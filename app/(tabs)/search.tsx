import MovieCard from '@/components/MovieCard';
import { fetchMovies } from '@/services/api';
import useFetch from '@/services/useFetch';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const Search = () => {
const [ search, setSearch ] = useState('');
const { data: movies, loading, error, refetch } = useFetch(
  () => fetchMovies({ query: search }),
  true,        // autoFetch
  [search]     // re-runs when search changes
);

  const styles = StyleSheet.create({ 
    searchBar: 
    { height: 35, 
      borderWidth: 1, 
      borderColor: '#ccc', 
      borderRadius: 8, 
      paddingHorizontal: 10, 
      backgroundColor: 'white', 
      marginBottom: 15}, 
    });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search.trim()) refetch();
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

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
        columnWrapperStyle = {{
          justifyContent: 'flex-start',
          gap: 20,
          paddingRight: 5,
          marginBottom: 10,
          marginTop: 2
        }}
        scrollEnabled={true}
      />
    </View>
  );

};

export default Search;
