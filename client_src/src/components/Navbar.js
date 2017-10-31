import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="blue">
                    <div className="nav-wrapper">
                    <a className="brand-logo center">Reilly Kennon</a>
                    <a data-activates="main-menu" className="button-collapse show-on-large"><i className="fa fa-bars">Menu</i></a>
                    <ul className="right hide-on-small-only">
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/about">About</Link></li>
             
                    </ul>
                    <ul className="side-nav" id="main-menu">
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/posts/write">Write Post</Link></li>

                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;