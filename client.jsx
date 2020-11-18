import React from 'react';
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'

import History from './History'

const Hot = hot(History)

ReactDOM.render(<Hot />, document.querySelector('#root'))