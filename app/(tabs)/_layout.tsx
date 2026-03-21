import { useFonts } from '@expo-google-fonts/cormorant-garamond';
import { DMSans_400Regular, DMSans_500Medium } from "@expo-google-fonts/dm-sans";
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const _layout = () => {
    const [fontsLoaded] = useFonts({
      DMSans_400Regular,
      DMSans_500Medium,
    });

    const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1b1b1b'
    },
  });
  
  return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#610000',      
          shadowOpacity: 0.5,   
          borderTopColor: 'transparent',
          height: 90,
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#bfbfbf',
        tabBarLabelStyle: {
          fontFamily: 'DMSans_500Medium', // replace with your custom font name
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