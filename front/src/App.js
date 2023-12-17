import logo from './logo.svg';
import './App.css';
import Example from './component/Navbar';
import { Home } from './component/screens/Home';
import { Store } from './component/screens/Store';
import { About } from './component/screens/About';
import { Contact } from './component/screens/Contact';
import React, { createContext, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const UserContext = createContext();

const initialState = {}; // Define your initial state here
const reducer = (state, action) => { // Define your reducer function here
  switch (action.type) {
    // Define your cases here
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <div className="App">
          <div>
            <Example />
          </div>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/store" element={<Store />} />
              
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}


export default App;
