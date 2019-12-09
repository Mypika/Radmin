import React from 'react';

import './login.css'

import LoginFrom from './loginform'
import RegFrom from './regfrom'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      loginform:true,
      aniform:false
    }
  }
  Toggle=(data)=>{
    this.setState({
      aniform:true,
    },()=>{
      setTimeout(()=>this.setState({ 
        loginform:data,
      }),200)
      setTimeout(()=>this.setState({ 
        aniform:false,
      }),500)
    })
  }
  LoginSkip=()=>{
    sessionStorage.setItem('username','123')
    this.props.history.push('/home')
  }
  render() {
    return (
    <div className="login">
       <div className={this.state.aniform?'aniform':''} style={{background:'rgba(255,255,255,.8)'}}>
          {this.state.loginform?<LoginFrom LoginSkip={this.LoginSkip}  toggle ={this.Toggle}/>:<RegFrom toggle ={this.Toggle} />}
       </div>
    </div>
    );
  }
}

export default Login;
