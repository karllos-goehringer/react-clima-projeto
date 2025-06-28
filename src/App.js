import logo from './logo.svg';
import './App.css';
import { HiOutlineSearch } from "react-icons/hi";
import { RiMapPin2Line } from "react-icons/ri";
import Searchbar from './components/Search-bar/Index';
import * as fun from './components/Search-bar/Funtions-API';
import ClimaCard from './components/Card-previsao/Index';
import { useState } from 'react';
function App() {
  const [dados, setDados] = useState(null); 
  return (
    <div className="App">
      <main className="main-app">
        <div className='box-clima'>
          <Searchbar onSearch={setDados}/>
          <div className='main-box' id='cardbox'>
          <ClimaCard dados={dados}/>
          <a id='alert'></a>
          </div>
        </div>  
      </main >
    </div >
  );
}

export default App;
