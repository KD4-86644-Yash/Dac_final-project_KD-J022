import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:7070/wedding/',
  headers: {
    'Content-Type': 'application/json',
  },
});
