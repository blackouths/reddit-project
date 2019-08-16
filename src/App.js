import React, { Component } from 'react';
import Toolbar from './components/Navbar/Toolbar/Toolbar';
import SideDrawer from './components/Navbar/SideDrawer/SideDrawer';
import Backdrop from './components/Navbar/Backdrop/Backdrop';
import ContentBox from './components/contentBox/contentbox';
import Wide from './components/main/wide/wide';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
        <ContentBox/>
        <Wide ratings= '24.6K'  field= 'coding' info='I have dedicated myself to the #100daysofcoding challenge and have started to do live streams everyday on Twitch. Link is down below. Will probably start around 10pm BST depending on how long my D and D game goes on for.' comments='53 Comments' shares='Share'/>
        </main>

      </div>
    );
  }
}

export default App;
