import React from 'react';
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'

import Home from './Home'

const Hot = hot(Home)

ReactDOM.render(<Hot />, document.querySelector('#root'))