import React, { Component } from 'react';
import './NewPerson.css';

class NewPerson extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        username:"",
        emailid: "",
        password: "",
        score: 0
      },
      submitted: false,
      pageChange: false,
      noError: true,
      errorMsg:"",
      rePass: ""
    }
    this.handleFChange = this.handleFChange.bind(this);
    this.handleLChange = this.handleLChange.bind(this);
    this.handleCChange = this.handleCChange.bind(this);
    this.handleRChange = this.handleRChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
validateEmail (event) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(event);
}

  handleSubmit (event) {
    event.preventDefault();
    console.log(JSON.stringify(this.state.formData))
    fetch('http://localhost:8080/user', {
     method: 'POST',
     body: JSON.stringify(this.state.formData),
   })
      .then(response => {
        if(response.status >= 200 && response.status < 300)
        {
          this.setState({submitted: true}) 
           setTimeout(function() { //Start the timer
              this.setState({pageChange: true}) //After 1 second, set render to true
           }.bind(this), 1000)
        }
    });
  }

  handleFChange(event) {
    this.state.formData.username = event.target.value;
  }
  handleLChange(event) {
    this.state.formData.emailid = event.target.value;
  }
  handleCChange(event) {
    this.state.formData.password = event.target.value;
  }
  handleRChange(event) {
    this.state.rePass = event.target.value;
  }
  changePage(){
    this.props.history.push('/');
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Register Here</h1>
        </header>
        <br/><br/>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>User Name</label>
                <input type="text" className="form-control" value={this.state.userName} onChange={this.handleFChange}/>
            </div>
            <div className="form-group">
                <label>Email Id</label>
                <input type="text" className="form-control" value={this.state.emailId} onChange={this.handleLChange}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={this.state.password} onChange={this.handleCChange}/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>

        {this.state.pageChange &&
                      this.changePage()
            
        }
        {this.state.submitted &&
          <div>
          <h2> New Person successfully registered</h2>
          </div>
        }


      </div>
    );
  }
}

export default NewPerson;
