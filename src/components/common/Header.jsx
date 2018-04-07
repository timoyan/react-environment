import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <ul className="navbar">
                    <li>
                        <NavLink to="/product" activeClassName="selected">Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news" activeClassName="selected">News</NavLink>
                    </li>
                </ul>
            </div>
        );
    };
}

export default Header;