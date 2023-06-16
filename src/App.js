
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Users from './Components/Users';
import Products from './Components/Products';
import Contact from './Components/Contact';


function App() {
  return (
    <div >
      <Nav/>
      
      <Routes>
        <Route path="/" element= {< Home/>}></Route>
        <Route path="/product" element={ <Products/>}></Route>
        <Route path="/user" element={ <Users/>}></Route>
        <Route path="/contact" element={ <Contact/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
