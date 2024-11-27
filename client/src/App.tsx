import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserListPage from './pages/UserListPage';
import EditUserPage from './pages/EditUserPage';
import NotFoundPage from './pages/NotFoundPage';
import ItemListPage from './pages/ItemListPage';
import EditItemPage from './pages/EditItemPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserListPage />} />
        <Route path="/edit/:id/" element={<EditUserPage />} />
        <Route path="/item/:id" element={<EditItemPage />} />
        <Route path="/items" element={<ItemListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;