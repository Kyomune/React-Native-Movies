// React
import React from 'react';
import { FlatList, Text, View } from 'react-native';

// Components
import { MoviePoster } from './MoviePoster';

// Interfaces
import { Movie } from '../interfaces/movieInterface';

interface Props {
  title?: string;
  moviesToShow: Movie[];
}

export const HorizontalSlider = ({ title, moviesToShow }: Props) => {
  return (
    <View style={{ height: !!title ? 260 : 220 }}>
      {title && (
        <Text style={{ marginLeft: 10, fontSize: 30, fontWeight: 'bold' }}>
          {title}
        </Text>
      )}
      <FlatList
        data={moviesToShow}
        renderItem={({ item }: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
