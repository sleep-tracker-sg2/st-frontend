import axios from 'axios';

export const handleRedux = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    baseURL: 'https://sleep-tracker-app.herokuapp.com/' 
  });
};
