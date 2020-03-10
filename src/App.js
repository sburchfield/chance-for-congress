import React, {Component} from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import './App.css';

import Home from './Containers/Home/Home'
import About from './Containers/About/About'
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
      backdrop = <Backdrop click={this.drawerToggleClickHandler}/>
    }

    return (
      <div className="App">
        <Router basename="/">
        <Toolbar drawerClickHandler = {this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} drawerClickHandler = {this.drawerToggleClickHandler}/>
        {backdrop}
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
