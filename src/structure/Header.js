import React from 'react';

import { Link } from 'react-router-dom';

import Search from '../components/Search';

import { getAppIcon } from '../apiCalls';

class Header extends React.Component {

    render() {
        return (
            <header className="App-header">
                <div className="grid-container" style={{gridTemplateColumns: "75px 20% auto"}}>
                    <div>
                        <Link to="/"><img src={getAppIcon()} className="App-logo" alt="logo" /></Link>
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