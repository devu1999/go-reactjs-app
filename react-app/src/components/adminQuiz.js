import React, { Component } from 'react';
import './adminQuiz.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class adminQuiz extends Component {
	render() {
		return (
			<div className="adminQuiz">
      <div className="App-header">
          <h1 className="App-title">Quiz Administrator</h1>
            </div>

      <ul className="adminReg">
       <li><Link to={'/addQuestion'}>Add New Question</Link></li>
       <li><Link to={'/viewQuestions'}>View All Questions</Link></li>
       <li><Link to={'/newAdmin'}>New Admin Registration</Link></li>
      </ul>


      </div> 
		)
	}
}

export default adminQuiz;
