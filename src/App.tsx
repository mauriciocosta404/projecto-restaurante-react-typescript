import React, { useState } from 'react';
import Header from './components/Header/Header';
import { GlobalStyle } from './styles/Global';
import * as C from './styles/App';
import Search from './components/Header/searh/Searsh';
import Home from './components/Header/Home/Home';
import Cards from './components/Cards/Cards';

function App() {
  const [showModalSearch,setShowModalSearch]=useState<boolean>(false);
  return (
    <>
      <GlobalStyle/>
      <Header showModalSearch={showModalSearch} setShowModalSearch={setShowModalSearch}/>
      <Search showModalSearch={showModalSearch} setShowModalSearch={setShowModalSearch}/>
      <Home/>
      <Cards/>
    </>
  );
}

export default App;
