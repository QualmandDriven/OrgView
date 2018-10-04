import React from 'react';
import logo from '../logo.svg';

import { Link } from 'react-router-dom';

import Search from '../components/Search';

class Header extends React.Component {

    render() {
        return (
            <header className="App-header">
                <div className="grid-container" style={{gridTemplateColumns: "75px 350px auto"}}>
                    <div>
                        <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                    </div>
                    <div>
                        <Link to="/"><h1 className="App-title">OrgView</h1></Link>
                    </div>
                    <Search />
                </div>
            
            </header>
        );        
    }
}

export default Header;