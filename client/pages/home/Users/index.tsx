import React from "react";

interface UsersProps {
  name?: string;
}

const Users: React.FC<UsersProps> = () => {
  return (
    <div>
      <h1>Users</h1>
    </div>
  );
};

export default Users;
