import React, { Component } from 'react';
import { BrowserRouter,Route,Link } from'react-router-dom';
import Home from './Home.jsx'

class Come extends Component {
    render() {
        return (
            <BrowserRouter>  
                <div>
                    <Link to='/'>home</Link>
                </div>
                <div>
                    <Route path='/' component={Home}></Route>
                </div>
            </BrowserRouter>
        )
    }
};
export default Come