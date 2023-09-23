import axios from 'axios';

export const fetchRandomGreeting = () => {
  return axios.get('http://localhost:3000/random_greeting');
};