import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import Reddit from '../icons/Reddit.png'
import SearchBar from '../SearchBar/SearchBar'
import Dropdown from '../Dropdown/Dropdown'
import '../ButtonsSignUp/ButtonsSignUp.css'
import ButtonsIcon from '../ButtonsIcon/ButtonsIcon';
import ButtonsSignUp from '../ButtonsSignUp/ButtonsSignUp';
import Popular from '../icons/popular.png'
import all from '../icons/all.png'
import oc from '../icons/oc.png'
import communities from '../icons/communities.png'
import coin from '../icons/coin.png'
import premium from '../icons/premium.png'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
    <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/"><img src={Reddit} alt="reddit icon"/></a></div>
        <div className='dropdownMenu'> <div style= {{ margin: '16px', position: 'relative'}}>
       <Dropdown items = {[
          {value: <span className='dd'><img className='pic' src= {Popular} alt="icon" />Popular</span>, id:1},
          {value: <span className='dd'><img className='pic' src= {all} alt="icon" />All</span>, id:2},
          {value: <span className='dd'><img className='pic' src= {oc} alt="icon"/>Original Content</span> , id:3},
          {value: <span className='dd'><img className='spic' src= {communities} alt="icon"/>Top Communities</span>, id:4},
          {value: <span className='dd'><img className='spic' src= {coin} alt="icon"/>Coins</span>, id:5},
          {value: <span className='dd'><img className='spic' src= {premium} alt="icon"/>Premium</span>, id:6}

         ]} />

        
       </div>
       </div>
        <div className="search-bar"/>
        <SearchBar searchBoxName={"userNameSearch"} onSearchTermChange={this.onSearch}/>
        <div className="spacer" />
        <div className="side-buttons">
        <ButtonsIcon type="submit" href="" id="popularBtn"/>
        <ButtonsIcon type="submit" href="" id="all"/>
        <ButtonsIcon type="submit" href="" id="oc"/> 
        <ButtonsSignUp type="submit" href="" name1="LOG IN" name2="SIGN UP"/>
        </div>
        <div className="toolbar_navigation-items">
        </div>
    </nav>
  </header>
);

export default toolbar;
