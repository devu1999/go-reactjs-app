import React, { Component } from 'react';
import DeletePerson from './test';
import ViewPeople from './ViewPeople';
import EditPerson from './EditPerson';
import NewPerson from './NewPerson';
import Home from './Home';
import signIn from './signIn';
import quiz from './quiz';
import adminAccess from './adminAccess';
import newAdmin from './newAdmin';
import adminQuiz from './adminQuiz';
import addQuestion from './addQuestion';
import viewQuestions from './viewQuestions';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
                 <Route exact path='/' component={Home} />
                 <Route exact path='/NewPerson' component={NewPerson} />
                 <Route exact path='/EditPerson' component={EditPerson} />
                 <Route exact path='/DeletePerson' component={DeletePerson} />
                 <Route exact path='/ViewPeople' component={ViewPeople} />
                 <Route exact path='/signIn' component={signIn} />
                 <Route exact path='/quiz' component={quiz} />
                 <Route exact path='/adminAccess' component={adminAccess} />
                 <Route exact path='/newAdmin' component={newAdmin}/>
                 <Route exact path='/adminQuiz' component={adminQuiz}/>
                 <Route exact path='/addQuestion' component={addQuestion}/>
                 <Route exact path='/viewQuestions' component={viewQuestions}/>
            </Switch>
          </div>

        </Router>
        
      </div>
    );
  }
}

export default App;
