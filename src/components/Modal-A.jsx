import React from 'react';

const ModalA = (props) => {
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
        {props.users.map((user) => (
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

export default ModalA;
