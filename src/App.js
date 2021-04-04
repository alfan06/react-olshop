import React from "react";
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './content.css'
import ProductPost from "./container/ProductPost";
import KeranjangPost from "./container/KeranjangPost";
import About from "./container/About";
import Home from "./container/Home";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Nav, Navbar, NavbarBrand,NavLink
} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Router>
        <div>
            <Navbar bg="primary" variant="dark">
                <NavbarBrand>
                    AlfanShop
                </NavbarBrand>
                <Nav className="mr-auto">
                    <NavLink>
                        <Link className="text-white" to="/">Home</Link>
                    </NavLink>
                    <NavLink>
                        <Link className="text-white" to={"/product"}>Product</Link>
                    </NavLink>
                    <NavLink>
                        <Link className="text-white" to={"/cart"}>Cart</Link>
                    </NavLink>
                    <NavLink>
                        <Link className="text-white" to={"/about"}>About</Link>
                    </NavLink>
                </Nav>
            </Navbar>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/product" component={ProductPost}/>
                <Route path="/cart" component={KeranjangPost}/>
                <Route path="/about" component={About}/>
            </Switch>
        </div>
    </Router>
  );
}
  
export default App;
