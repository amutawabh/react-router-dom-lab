import React from 'react';
import { useParams } from 'react-router-dom';

const mailboxesDetails = () => {
  const { id } = useParams();


  const mailboxesDetails = {
    1: { name: 'Inbox', description: 'This is your inbox where you receive all your mails.' },
    2: { name: 'Sent', description: 'This is the sent mailbox where your sent mails are stored.' },
    3: { name: 'Drafts', description: 'This is the drafts folder for unfinished mails.' }
  };

  const mailbox = mailboxesDetails[id];

  if (!mailbox) {
    return <h2>Mailbox not found</h2>;
  }

  return (
    <div>
      <h1>{mailbox.name}</h1>
      <p>{mailbox.description}</p>
    </div>
  );
};

export default MailboxDetails;
