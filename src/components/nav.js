import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav>
                
                <Link to="/"><h2>Back to Homepage</h2></Link>
            
            </nav>
        );
    }
}

export default Nav;