import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Routers from './router/Router'
import Nav from './components/nav'
import Footer from './components/footer'
import PageIndex from './page/index'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
require('./global/global.css')
class App extends Component {

  render() {
    return (
      <div >
        <MuiThemeProvider>
          <Router>
            <div>
              <Nav />
              <div style={{ paddingTop: '64px' }}><Routers /></div>
              <Footer />
            </div>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
