import React, {useEffect, useState} from "react";
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import AddDebits from "./components/AddDebits";
import AddCredits from "./components/AddCredits";

function App() {
  const [creds, setCreds] = useState(0);
  const [debs, setDebs] = useState(0);
  const [creditEntries, setCreditEntries] = useState([]);
  const [debitEntries, setDebitEntries] = useState([]);
  //const [accountBalance, setAccountBalance] = useState(0);

  useEffect(() =>{
    async function fetchCredits(){
      try{
        const fetchCredit = await axios.get("https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits");
        setCreds(fetchCredit.data);
        console.log(fetchCredit.data);
      }
      catch(error){
        console.error(error);
      }
    }
    fetchCredits();
  }, []);

  useEffect(() =>{
    async function fetchDebits(){
      try{
        const fetchDebits = await axios.get("https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits");
        setDebs(fetchDebits.data);
      }
      catch(error){
        console.error(error);
      }
    }
    fetchDebits();
  }, []);

  function handleCreditDataEntry(event){
      event.preventDefault();
      const entryDescription = event.target[0].value;
      const entryAmount = event.target[1].value;
      const entry = {amount:entryAmount, description:entryDescription, date: new Date().toLocaleString()};
      addCreds(entry);
      event.currentTarget.reset();
  }

  function addCreds(entry){
      setCreds(creds+parseInt(entry.amount));
      const updatedEntries = [...creditEntries, entry]; 
      setCreditEntries(updatedEntries);
  }

  function handleDebitDataEntry(event){
    event.preventDefault();
    const entryDescription = event.target[0].value;
    const entryAmount = event.target[1].value;
    const entry = {amount:entryAmount, description:entryDescription, date: new Date().toLocaleString()};
    addDebit(entry);
    event.target.reset();
  }

  function addDebit(entry){
      setDebs(debs+parseInt(entry.amount));
      const updatedEntries = [...debitEntries, entry]; 
      setDebitEntries(updatedEntries);
  }

  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/assignment9">Home</Link>
            </li>
            <li>
              <Link to="/assignment9/debits">Debits</Link>
            </li>
            <li>
              <Link to="/assignment9/credits">Credits</Link>
            </li>
            <li>
              <Link to="/assignment9/userProfile">User Profile</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
            <Route path="/assignment9" element={<Home creds={creds} debs={debs}/>} />
            <Route path="/assignment9/debits" element={<AddDebits debs={debs} creds={creds} debitEntries={debitEntries} handleDebitDataEntry={handleDebitDataEntry}/>} />
            <Route path="/assignment9/credits" element={<AddCredits creds={creds} debs={debs} creditEntries={creditEntries} handleCreditDataEntry={handleCreditDataEntry}/>} />
            <Route path="/assignment9/userProfile/*" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;