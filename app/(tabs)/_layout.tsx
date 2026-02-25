import { Tabs } from 'expo-router'
import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const _layout = () => {
    const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212', // change this to any color you want
    },
  });
  
  return (
      <SafeAreaView style={styles.container}>
        <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#181a41',
          borderTopWidth: 0, // removes the default line
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontFamily: 'Segoe UI', // replace with your custom font name
          fontSize: 14,
        },
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ size }) => (
            <Image
              source={require('@/assets/icons/home.png')}
              style={{ width: 20, height: 20}}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: 'Search',
          tabBarIcon: ({ size }) => (
            <Image
              source={require('@/assets/icons/search.png')}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
</SafeAreaView>
    
  )

  

}

export default _layout