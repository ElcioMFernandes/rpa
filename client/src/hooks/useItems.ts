import { useEffect, useState } from 'react';
import { fetchItems } from '../services/itemService';
import { processItems } from '../utils/processItems';
import ItemsProps from '../interfaces/ItemsProps';

export const useItems = () => {
  const [items, setItems] = useState<ItemsProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getItems = async () => {
      try {
        const itemsData = await fetchItems();
        console.log("Fetched items data:", itemsData); // Adiciona log para depuração
        const processedItems = processItems(itemsData);
        setItems(processedItems);
      } catch (error) {
        setError('Failed to fetch items');
        console.error(error);
      }
    };

    getItems();
  }, []);

  return { items, error };
};