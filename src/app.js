import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Home from './components/home';
import About from './components/about';
import './css/App.css'
const App = () => (
    <Router>
        <div className="container">
            <div className="container-bar">
                <ul>
                    <MenuLink activeOnlyWhenExact={true} to="/" label="Home"/>
                    <MenuLink to="/about" label="About"/>
                </ul>
            </div>
            <hr/>
            <div className="content-con">
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        </div>
    </Router>
)

const MenuLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
        <li className={match ? 'active' : ''}>
            {match ? '> ' : ''}<Link to={to}>{label}</Link>
        </li>
    )}/>
)
export default App