import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import Reddit from '../icons/Reddit.png'
import SearchBar from '../SearchBar/SearchBar'
import Dropdown from '../Dropdown/Dropdown'
import Popular from '../icons/popular.png'
import all from '../icons/all.png'
import oc from '../icons/oc.png'
import communities from '../icons/communities.png'
import coin from '../icons/coin.png'
import premium from '../icons/premium.png'
import User from '../User/User'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
    <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/"><img src={Reddit} alt="reddit icon"/></a></div>
        <div className='dropdownMenu'> <div style= {{ margin: '16px', position: 'relative'}}>
       <Dropdown items = {[
           {value:  <span className='dd'><img className='pic' src= {Popular} alt="icon" />Popular</span>, id:1},
           {value:  <span className='dd'><img className='pic' src= {all} alt="icon" />All</span>, id:2},
           {value:  <span className='dd'><img className='pic' src= {oc} alt="icon"/>Original Content</span> , id:3},
           {value: <span className='dd'><img className='spic' src= {communities} alt="icon"/>Top Communities</span>, id:4},
           {value: <span className='dd'><img className='spic' src= {coin} alt="icon"/>Coins</span>, id:5},
           {value: <span className='dd'><img className='spic' src= {premium} alt="icon"/>Premium</span>, id:6}

         ]} >

         </Dropdown>
       </div>
       </div>
        <div className="search-bar"/>
        <SearchBar searchBoxName={"userNameSearch"} onSearchTermChange={this.onSearch}/>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
        <div className='user'>
        <User items = {[
          {value: 'Night Mode', id:1 },
          {value: 'Reddit Coins', id:2 },
          {value: 'Reddit Premium', id:3 },
          {value: 'Help Center', id:4 },
          {value: 'Log in/Sign Up', id:5 },
        ]}> </User>

        </div>
        </div>
    </nav>
  </header>
);

export default toolbar;
