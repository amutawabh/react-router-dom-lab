import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    

    console.log('New Mailbox Created:', { name, description });


    navigate('/');
  };

  return (
    <div>
      <h1>Create a New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Mailbox Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Create Mailbox</button>
      </form>
    </div>
  );
};

export default MailboxForm;
