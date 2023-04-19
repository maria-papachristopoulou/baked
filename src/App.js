// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from "@reach/router";
// import { LocationContext } from './context';
import React, { useEffect, useContext, useState } from 'react';
import './App.css';
import Home from './components/home';
import Ethimo from './components/ethimo';
import Extirior from './components/extirior';
import Image from './components/image';

// import { ScrollToTop } from './ScrollToTop'
import { Row, Col } from 'react-bootstrap';




const App = () => {

  // const locationContext = useContext(LocationContext);
  // const { state, dispatch } = locationContext;

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div>
      <Router primary={false}>
        <Ethimo path="/ethimo" />
        <Home path={`/`} />
        <Extirior path="/extirior" />
        <Image path="/image" />
      </Router>
    </div>
  );
}


export default App;