import React,{Component} from 'react';


// import {Button} from 'antd';
import {BrowserRouter as Router, Route } from 'react-router-dom'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
  componentWillMount() {
    let username = sessionStorage.getItem('username')
    if(username){
      this.props.history.push('/Home')
    }else{
      this.props.history.push('/Login')
    }
  }
  render() { 
   
    return ( 
      <Router>
        <Route/>
      </Router>
     );
  }
}

export default Index;
