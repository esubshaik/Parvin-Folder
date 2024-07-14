import './App.css';
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Main from './Components/Main';
import Template1 from './Components/Template1';

class App extends Component {
    render() {
        return (
            <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home/>}
                    ></Route>
                      <Route
                            path="/register"
                            element={<Register />}
                      ></Route>
                       <Route
                            path="/login"
                            element={<Login />}
                      ></Route>
                      
                      <Route
                            path="/main"
                            element={<Main />}
                      ></Route>
                      <Route
                            path="/template1"
                            element={<Template1 />}
                      ></Route>
                    </Routes>
            </Router>
        );
    }
}

export default App;
