import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Farmerarea from "./components/Farmerarea";
import Customer from "./components/Customerarea";
import Mediator from "./components/Mediatorarea";
import Farmer from "./components/Farmer";
import Addproduct from "./components/Addproduct";
import Addproducts from "./components/Addproducts";
import Showproducts from "./components/Showproducts";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/service-farmer-area" element={<Farmerarea />} />
        <Route exact path="/service-customer-area" element={<Customer />} />
        <Route exact path="/service-mediator-area" element={<Mediator />} />
        <Route exact path="/farmer" element={<Farmer />} />
        <Route exact path="/addproduct" element={<Addproduct />} />
        <Route exact path="/Addproducts" element={<Addproducts />} />
        <Route exact path="/showproducts" element={<Showproducts />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
