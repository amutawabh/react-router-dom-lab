// app.jsx

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";
import MailboxList from "./components/MailboxList";
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <div>
        <Routes>
          <Route path="/" element={<MailboxList />} />
          <Route path="/mailbox/:id" element={<MailboxDetails />} /> 
          <Route path="/new" element={<MailboxForm />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;