import { useItems } from '../hooks/useItems';
import Table from '../components/Table';
import { useNavigate } from 'react-router-dom';

const ItemListPage = () => {
  const { items, error } = useItems();
  const navigate = useNavigate();

  if (error) {
    return <div>Error: {error}</div>;
  }

  const headers = [
    { label: "ID", key: "id", clickable: true },
    { label: "Nome", key: "name" },
    { label: "Descrição", key: "description" }
  ];

  const handleCellClick = (row: { [key: string]: any }, columnKey: string) => {
    if (columnKey === 'id') {
      navigate(`/item/${row.id}`);
    }
  };

  return (
    <Table headers={headers} data={items} onCellClick={handleCellClick}></Table>
  );
};

export default ItemListPage;