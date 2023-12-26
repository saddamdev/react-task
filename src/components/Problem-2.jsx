import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ModalA from './Modal-A';
import ModalB from './Modal-B';

const Problem2 = () => {
  const [users, setUsers] = useState([]);
  const [isChange, setChange] = useState(false);

  useEffect(() => {
    axios
      .get('https://contact.mediusware.com/api/contacts/')
      .then((res) => setUsers(res.data.results));
  }, []);

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

        <div className='d-flex justify-content-center gap-3'>
          <button
            className='btn btn-lg btn-outline-primary'
            type='button'
            onClick={() => setChange(false)}
          >
            All Contacts
          </button>
          <button
            className='btn btn-lg btn-outline-warning'
            type='button'
            onClick={() => setChange(true)}
          >
            US Contacts
          </button>
        </div>
      </div>
      {isChange ? <ModalB users={users} /> : <ModalA users={users} />}
    </div>
  );
};

export default Problem2;
