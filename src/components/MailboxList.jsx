import React from 'react';
import { Link } from 'react-router-dom';

const MailboxList = () => {
  const Mailboxes = [
    { id: 1, name: 'Inbox' },
    { id: 2, name: 'Sent' },
    { id: 3, name: 'Drafts' }
  ];

  return (
    <div>
      <h1>Mailbox List</h1>
      <ul>
        {mailboxes.map((mailbox) => (
          <li key={mailbox.id}>
            <Link to={`/mailbox/${mailbox.id}`}>{mailbox.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MailboxList;
