import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ({ children }: any) => {
  return <GradientProvider>{children}</GradientProvider>;
};

const App = () => {
  return (
    <AppState>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </AppState>
  );
};

export default App;
