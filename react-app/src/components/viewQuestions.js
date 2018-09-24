import React, { Component } from 'react';

class viewQuestions extends Component {
	constructor() {
    super();
    this.state = {
      data1 : [],
      formData: {
        username:"",
        emailid: "",
        password: "",
      },
      submitted: true,
      pageChange: false,
      noError: true,
      errorMsg:"",
      rePass: "",

    }
    
    this.handleSubmit() 
      }

  handleSubmit () {
  	this.state.submitted = false
    var url = `http://localhost:8080/viewQuestions`
    fetch(url, {
     method: 'GET',
   }).then(response => response.json())
    .then(data => {
    	this.setState({data1: data})
    });
    console.log("check down")
    console.log(this.state.data1)
  }
 
 
  
  render() {

    return (
      	<div>
    	
    	
    	<h2> All questions displayed on console</h2>
    	<h3>{this.state.data1[0]['question']}</h3>
    	</div>
        
        );
}
}

export default viewQuestions;
