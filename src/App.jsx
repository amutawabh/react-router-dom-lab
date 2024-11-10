import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";
import MailboxList from "./components/MailboxList";
import './App.css'

const App = () => {
  return (
    <>
      <Navbar /> 
        <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
          <Route path="/mailboxes" element={<MailboxList />} />
          <Route path="	/mailboxes/:mailboxId" element={<MailboxDetails />} /> 
          <Route path="/new-mailbox" element={<MailboxForm />} /> 
        </Routes>
    </>
  );
};

export default App;