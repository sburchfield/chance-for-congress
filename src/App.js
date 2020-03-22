import React, {Component} from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './animate.css';
import './App.css';

import Home from './Containers/Home/Home'
import Policy from './Containers/Policy/Policy'
import Backdrop from './Components/Backdrop/Backdrop';
import SideDrawer from './Components/SideDrawer/SideDrawer';

import Toolbar from './Components/Toolbar/Toolbar'

class App extends Component {

  constructor(props){
   super(props)
   this.state = {
     sideDrawerOpen: false,
     lightboxIsOpen: false,
     done: false,
       }
    }

    drawerToggleClickHandler = () => {
      this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen}
      })
    }

    backdropClickHandler = () => {
      this.setState({sideDrawerOpen: false});
    };

  render(){

    let backdrop

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div className="App">
        <Router basename="/">
        <Toolbar drawerClickHandler = {this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} drawerClickHandler = {this.drawerToggleClickHandler}/>
        {backdrop}
          <React.Fragment>
            <Switch>
              <Route exact path={'/'} component={Home} />
              <Route path={'/Policy'} component={Policy} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
