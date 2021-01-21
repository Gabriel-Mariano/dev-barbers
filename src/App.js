import React from 'react';
import Routes from './routes';
import Context  from './contexts';
import './App.css';



function App() {
  return (
    <div>
      <Context>
          <Routes/>
      </Context>
    </div>
  );
}

export default App;
