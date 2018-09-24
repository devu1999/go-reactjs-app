import React, { Component } from 'react';
import './NewPerson.css';

class addQuestion extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        question:"",
        op1: "",
        op2: "",
        op3: "",
        op4: "",
        genre: "",
        ans: 0,
      },
      submitted: false,
      pageChange: false,
      noError: true,
      errorMsg:"",
      rePass: ""
    }
    this.handleQChange = this.handleQChange.bind(this);
    this.handleop1Change = this.handleop1Change.bind(this);
    this.handleop2Change = this.handleop2Change.bind(this);
    this.handleop3Change = this.handleop3Change.bind(this);
    this.handleop4Change = this.handleop4Change.bind(this);
    this.handlegenreChange = this.handlegenreChange.bind(this);
    this.handleansChange = this.handleansChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log(JSON.stringify(this.state.formData))
    fetch('http://localhost:8080/ques', {
     method: 'POST',
     body: JSON.stringify(this.state.formData),
   })
      .then(response => {
        if(response.status >= 200 && response.status < 300)
        {
          this.setState({submitted: true}) 
           setTimeout(function() { 
              this.setState({pageChange: true}) 
           }.bind(this), 1000)
        }
    });
  }

  handleQChange(event) {
    this.state.formData.question = event.target.value;
  }
  handleop1Change(event) {
    this.state.formData.op1 = event.target.value;
  }
  handleop2Change(event) {
    this.state.formData.op2 = event.target.value;
  }

  handleop3Change(event) {
    this.state.formData.op3 = event.target.value;
  }

  handleop4Change(event) {
    this.state.formData.op4 = event.target.value;
  }

  handlegenreChange(event) {
    this.state.formData.genre = event.target.value;
  }

  handleansChange(event) {
    this.state.formData.ans = event.target.value;
  }
  changePage(){
    this.props.history.push('/adminQuiz');
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Add a new Question</h1>
        </header>
        <br/><br/>
        {this.state.submitted &&
          <div>
          <h2> New Person successfully registered</h2>
          </div>
        }
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Question</label>
                <input type="text" className="form-control" value={this.state.question} onChange={this.handleQChange}/>
            </div>
            <div className="form-group">
                <label>Option 1</label>
                <input type="text" className="form-control" value={this.state.op1} onChange={this.handleop1Change}/>
            </div>
            <div className="form-group">
                <label>Option 2</label>
                <input type="text" className="form-control" value={this.state.op2} onChange={this.handleop2Change}/>
            </div>
            <div className="form-group">
                <label>Option 3</label>
                <input type="text" className="form-control" value={this.state.op3} onChange={this.handleop3Change}/>
            </div>
            <div className="form-group">
                <label>Option 4</label>
                <input type="text" className="form-control" value={this.state.op4} onChange={this.handleop4Change}/>
            </div>
            <div className="form-group">
                <label>Genre</label>
                <input type="text" className="form-control" value={this.state.genre} onChange={this.handlegenreChange}/>
            </div>
            <div className="form-group">
                <label>Right Answer</label>
                <input type="text" className="form-control" value={this.state.ans} onChange={this.handleansChange}/>
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

export default addQuestion;
