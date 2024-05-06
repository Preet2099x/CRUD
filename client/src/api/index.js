import axios from 'axios';

const url = 'http://localhost:5000/psots';

export const fetchPosts = () => axios.get(url);