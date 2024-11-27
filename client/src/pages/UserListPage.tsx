import { useUsers } from '../hooks/useUsers';
import Table from '../components/Table';
import { useNavigate } from 'react-router-dom';

const UserListPage = () => {
  const { users, error } = useUsers();
  const navigate = useNavigate();

  if (error) {
    return <div>Error: {error}</div>;
  }

  const headers = [
    { label: "ID", key: "id", clickable: true },
    { label: "Nome", key: "name" }
  ];

  const handleCellClick = (row: { [key: string]: any }, columnKey: string) => {
    if (columnKey === 'id') {
      navigate(`/edit/${row.id}`);
    }
  };

  return (
    <Table headers={headers} data={users} onCellClick={handleCellClick}></Table>
  );
};

export default UserListPage;