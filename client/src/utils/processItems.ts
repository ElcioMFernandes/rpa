import ItemsProps from '../interfaces/ItemsProps';

export const processItems = (items: any[]): ItemsProps[] => {
  console.log("Raw items from backend:", items); // Adiciona log para depuração
  return items.map(item => {
    if (!item._id || !item.name) {
      throw new Error('Invalid item data');
    }
    const processedItem = {
      id: item._id,  // Mapeia _id para id
      name: item.name,
      description: item.description
    };
    console.log("Processed item:", processedItem); // Adiciona log para depuração
    return processedItem;
  });
};