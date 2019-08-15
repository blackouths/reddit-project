import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import Reddit from '../icons/Reddit.png'
import SearchBar from '../SearchBar/SearchBar'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
    <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/"><img src={Reddit} alt="reddit icon"/></a></div>
        <div className="search-bar"/>
        <SearchBar searchBoxName={"userNameSearch"} onSearchTermChange={this.onSearch}/>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
        </div>
    </nav>
  </header>
);

export default toolbar;
