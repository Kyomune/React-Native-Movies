import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { MovieFull, Cast } from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text> {movieFull?.vote_average}</Text>

          <Text style={{ marginLeft: 10 }}>
            - {movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
            Overview
          </Text>

          <Text style={{ fontSize: 16 }}> {movieFull.overview}</Text>

          <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
            Budget
          </Text>

          <Text style={{ fontSize: 16 }}>
            {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
          </Text>
        </View>
      </View>

      <View style={{ marginBottom: 50 }}>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Casting
        </Text>
        <FlatList
          style={{ marginTop: 10, height: 70 }}
          data={cast}
          renderItem={({ item }: any) => <CastItem actor={item} />}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
};
