// React
import * as React from 'react';

// Screen
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';

// Thirds
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Interfaces
import { Movie } from '../interfaces/movieInterface';

export type RootStackParamList = {
  Home: undefined;
  DetailScreen: Movie;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
