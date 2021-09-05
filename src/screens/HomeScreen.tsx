// React
import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';

// Hooks
import useMovies from '../hooks/useMovies';

// Components
import { MoviePoster } from '../components/MoviePoster';

// Thirds
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';

export const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  const { width: windowWidth } = useWindowDimensions();

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="red" size={20} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          <View style={{ height: 440 }}>
            <Carousel
              data={nowPlaying}
              itemWidth={300}
              renderItem={({ item }: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              inactiveSlideOpacity={0.9}
            />
          </View>

          <HorizontalSlider moviesToShow={popular} title={'Popular Movies'} />
          <HorizontalSlider moviesToShow={topRated} title={'Top Rated'} />
          <HorizontalSlider moviesToShow={upComing} title={'Up Coming'} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
