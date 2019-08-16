import React, { Component } from 'react';
import Toolbar from './components/Navbar/Toolbar/Toolbar';
import SideDrawer from './components/Navbar/SideDrawer/SideDrawer';
import Backdrop from './components/Navbar/Backdrop/Backdrop';
import ContentBox from './components/contentBox/contentbox';

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
        </main>

      </div>
    );
  }
}

export default App;
