import React from 'react';
import './SideDrawer/DrawerToggleButton';
import './Navbar.css';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import Dropdown from './Dropdown/Dropdown';



const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">>
            <div><DrawerToggleButton/></div>
            <div className="toolbar_logo"><a href = "/">THE LOGO</a></div>
            <Dropdown
                items={[
                    {value: 'Popular', id: 1},
                    {value: 'All', id: 2},
                    {value: 'Original Content', id: 3},
                    {value: 'Top Communities', id: 4},
                    {value: 'Coins', id: 5},
                    {value: 'Premium', id: 6},
                ]} />
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