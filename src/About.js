import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class About extends Component {
    render(){
        return(
            <div className="App flex-container">
                <div className="About">
                    <h1>This is the about page</h1>
                    <p><Link to="/">Go to the homepage</Link></p>
                </div>
            </div>
        );
    }
}

export default About;
