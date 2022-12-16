import React, { useState } from 'react'
import './App.css';
import Alert from './components/Alert';

import About from './components/Aboutus';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from "react-router-dom";
import Contact from './components/Contact';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message, type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark Mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert(" light Mode has been enabled", "success")

    }

  }
  const toggle2Mode = () => {
    if (mode === 'light') {
      setMode('red');
      document.body.style.backgroundColor = '#d64856'
      showAlert("RED Mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert(" light Mode has been enabled", "success")

    }

  }

  return (
    <>
<Router>
      <Navbar title='TEXTER' about='ABOUT' home='HOME' contact='CONTACT' mode={mode} toggleMode={toggleMode} toggle2Mode={toggle2Mode} />
      <Routes>
      <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path ="/" element={<Textform showAlert={showAlert} heading='TEXT AREA ' mode={mode} />} />
      </Routes>
      <Alert alert={alert} />
        </Router>
    </>
  );
}


export default App;
