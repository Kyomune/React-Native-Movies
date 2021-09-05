import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'acaad00e92b214e005487a09be243052',
    language: 'es-ES',
  },
});

export default movieDB;
