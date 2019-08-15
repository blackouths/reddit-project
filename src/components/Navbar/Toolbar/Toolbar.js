import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import Reddit from '../icons/Reddit.png'
import SearchBar from '../SearchBar/SearchBar'
import Dropdown from '../Dropdown/Dropdown'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
    <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/"><img src={Reddit} alt="reddit icon"/></a></div>
        <div className='dropdownMenu'> <div style= {{ margin: '16px', position: 'relative'}}>
       <Dropdown items = {[
           {value: 'Popular', id:1},
           {value: 'All', id:2},
           {value: 'Original Content', id:3},
           {value: 'Top Communities', id:4},
           {value: 'Coins', id:5},
           {value: 'Premium', id:6}

         ]} >

         </Dropdown>
       </div>
       </div>
        <div className="search-bar"/>
        <SearchBar searchBoxName={"userNameSearch"} onSearchTermChange={this.onSearch}/>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
        </div>
    </nav>
  </header>
);

export default toolbar;
