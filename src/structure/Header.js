import React from 'react';
import logo from '../logo.svg';

import Search from '../components/Search';

class Header extends React.Component {

    render() {
        return (
            <header className="App-header">
                <div className="grid-container" style={{gridTemplateColumns: "75px 350px auto"}}>
                    <div>
                        <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
                    </div>
                    <div>
                        <a href="/"><h1 className="App-title">OrgView</h1></a>
                    </div>
                    <Search />
                </div>
            
            </header>
        );        
    }
}

export default Header;