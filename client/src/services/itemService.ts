import axios from 'axios';

export const fetchItems = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/items');
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch items');
  }
};