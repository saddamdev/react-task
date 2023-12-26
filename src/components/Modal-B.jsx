import React from 'react';

const ModalB = (props) => {
  const usOnly = props.users.filter(
    (user) => user.country.name === 'United States'
  );
  return (
    <table className='table table-striped '>
      <thead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Country</th>
          <th scope='col'>Phone No</th>
        </tr>
      </thead>
      <tbody>
        {usOnly.map((user) => (
          <tr key={user.id}>
            <td>{user.country.id}</td>
            <td>{user.country.name}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ModalB;
