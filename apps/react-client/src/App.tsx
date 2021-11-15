import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CountriesPage } from './components/pages/countries';

function App() {
  const h1Message = "Countries App"
  return (
    <div className="App">
      {h1Message}
      <CountriesPage />
    </div>
  );
}

export default App;
