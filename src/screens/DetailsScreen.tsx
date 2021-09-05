import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { RootStackParamList } from '../navigation/Navigation';

import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'DetailScreen'> {}

export const DetailsScreen = ({ route, navigation }: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const { cast, isLoading, movieFull } = useMovieDetails(movie.id);

  const { height } = useWindowDimensions();

  const styles = StyleSheet.create({
    imageContainer: {
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
      elevation: 10,
      height: height * 0.7,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 7 },
      shadowOpacity: 0.41,
      shadowRadius: 7,
      width: '100%',
    },
    imageBorder: {
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
      flex: 1,
      overflow: 'hidden',
    },
    posterImage: {
      flex: 1,
    },
    marginContainer: {
      marginHorizontal: 20,
      marginTop: 20,
    },
    subTitle: {
      fontSize: 16,
      opacity: 0.8,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    backButton: {
      position: 'absolute',
      zIndex: 999,
      elevation: 9,
      top: 30,
      left: 5,
    },
  });

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{
              uri,
            }}
            style={styles.posterImage}
          />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.pop()}>
        <Icon color="white" name="arrow-back-outline" size={60} />
      </TouchableOpacity>
    </ScrollView>
  );
};
