import './App.css'
import { createContext, useReducer } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import Home from "./component/screens/Home"
import Store from "./component/screens/Store"
import About from "./component/screens/About"
import Contact from "./component/screens/Contact"
import Image from "./assets/images/background.jpg"

export const UserContext = createContext();
const initialState = {};

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
      <>
      <img className="absolute inset-0 w-full h-full object-cover z-[-1]" src={Image}/>
        <div className="App">
          <div>
            <Navbar />
          </div>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/store" element={<Store />} />
              
            </Routes>
          </div>
          <Footer/>
        </div></>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App
