import React ,{Component}from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Index from '../src/pages/index/index'
import Longin from '../src/pages/login/login'
import Home from '../src/pages/home/home'
import Err404 from '../src/pages/404/'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {  
    return (
      <Router>
        <Route path="/"  component={Index} />
        <Route path="/Login" component={Longin} />
        <Route path="/Home" component={Home} />
        <Route path="/404" component={Err404} />
      </Router>
    );
  }
}

export default App;
