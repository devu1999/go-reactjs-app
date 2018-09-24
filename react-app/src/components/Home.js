import React, { Component } from 'react';
import NewComponent from './NewComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './Home.css'
import quiz_logo from './quiz.jpg'
import NewPerson from './NewPerson';
import signIn from './signIn';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class Home extends Component {
  constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
  render() {
    return (
      <div className="App">
      <div className="App-header">
          <h1 className="App-title">Welcome to React Quiz Portal</h1>
      </div>
      <div className="login-signup">
      <div className="intro-text">Here is a super interesting quiz game for you.This game has lots of exciting questions along with vareity of genres.</div>

      <ul className="regsin">
       <li><Link to={'/NewPerson'}>Register</Link></li>
       <li><Link to={'/signIn'}>Sign In</Link></li>
       <li><Link to={'/newAdmin'}>Admin register here</Link></li>
       <li><Link to={'/adminAccess'}>Admin Access Here</Link></li>
      </ul>

      </div>

      <div className="quiz-pic">
      <img  src={quiz_logo} float="left" height="500" width="400" />
      </div>  
      </div>

    );
  }
}
const style = {
 margin: 15,
};

export default Home;
