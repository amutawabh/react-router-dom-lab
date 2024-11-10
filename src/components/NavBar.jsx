/*--------------------- NavBar.jsx ---------------------------

Home to Home
MailboxList	 to /mailboxes	 Mailboxes
MailboxForm	 to /new-mailbox New Mailbox
*/ 


import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mailboxes">Mailboxes</Link> 
        </li>
        <li>
          <Link to="/new-mailbox">New Mailbox</Link> 
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
