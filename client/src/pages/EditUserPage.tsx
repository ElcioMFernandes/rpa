import React from 'react';
import { useParams } from 'react-router-dom';

const EditUserPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Edit User {id}</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditUserPage;