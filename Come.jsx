import React, { Component } from 'react';
import { BrowserRouter,Route,Link } from'react-router-dom';
import Home from './Home.jsx'
// import'./Home.css'

class Come extends Component {
    
    render() {
        return (
            <BrowserRouter>  
                <div>
                    <Link to='/home'>home</Link>
                </div>
                <div>
                    <Route path='/home' component={Home}></Route>
                </div>
            </BrowserRouter>
        )
    }
};
export default Come