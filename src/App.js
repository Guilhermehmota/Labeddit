import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Router from './routes/Router'

const App = () => {
  const token = localStorage.getItem("token")
  const [buttonText, setButtonText] = useState(token ? "Logout" : "Login")
  return (
    <div >
      <BrowserRouter>
        <Header buttonText={buttonText} setButtonText={setButtonText} />
        <Router buttonText={buttonText} setButtonText={setButtonText} />
      </BrowserRouter>
    </div>
  );
}

export default App;
