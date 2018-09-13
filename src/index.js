import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import Login from './Login'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import registerServiceWorker from './registerServiceWorker'
import ShowData from './ShowData'

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/modal" component={App} />
            <Route exact path="/" component={Login} />
            <Route exact path="/card" component={ShowData} />
        </div>
    </Router>
    , document.getElementById('root')
)
registerServiceWorker()
