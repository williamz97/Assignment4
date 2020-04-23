import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

// components
import Header from './components/header';
import Main from './components/main';
import Nav from './components/nav';
import Footer from './components/footer';
import Blog1 from './Pages/blog1';
import Blog2 from './Pages/blog2';
import Blog3 from './Pages/blog3';


// includes
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />

        <div class='column-layout'>
          
          <Route exact path='/' component={Main} />
          <Route exact path='/blog1' component={Blog1} />
          <Route exact path='/blog2' component={Blog2} />
          <Route exact path='/blog3' component={Blog3} />

          <Nav />
        </div>

        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
