import React, { useState } from 'react';
import Header from './components/Header/Header';
import { GlobalStyle } from './styles/Global';
import * as C from './styles/App';
import Search from './components/Header/searh/Searsh';

function App() {
  const [showModalSearch,setShowModalSearch]=useState<boolean>(false);
  return (
    <>
      <GlobalStyle/>
      <Header showModalSearch={showModalSearch} setShowModalSearch={setShowModalSearch}/>
      <Search showModalSearch={showModalSearch} setShowModalSearch={setShowModalSearch}/>
    </>
  );
}

export default App;
