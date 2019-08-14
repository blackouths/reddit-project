import React from 'react';
import '../SideDrawer/DrawerToggleButton';
import './Navbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';



const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">>
            <div>
            <DrawerToggleButton/>
            </div>
            <div className="toolbar_logo"><a href = "/">THE LOGO</a></div>
            <div className="spacer"/>
            <div className="toolbar_navigation_items">
             <ul>
                 <li><a href="/">Placeholder</a></li>
                 <li><a href="/">Placeholder</a></li>
             </ul>
             </div>  
        </nav>
    </header>
);

export default Toolbar;