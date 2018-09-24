import React, { Component } from 'react';
import './ViewPeople.css';

class ViewPeople extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Lifecycle hook, runs after component has mounted onto the DOM structure
  componentDidMount() {
    const request = new Request('http://127.0.0.1:8080/people/');
    fetch(request)
      .then(response => response.json())
        .then(data => this.setState({data: data}));
  }

  handleSubmit(event) {
    var id = document.querySelector("input['tobedeleted']:checked").value;
    var url = 'http://localhost:8080/people/' + id;
    fetch(url,{
      method : 'DELETE'
    }).then( response => {
      window.location.reload()
    });
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Choose the person to be deleted</h1>
        </header>
           <br/><br/>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
        <table className="table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>City</th>
              <th>Check</th>
            </tr>
          </thead>
          <tbody>{this.state.data.map(function(item, key) {
               return (
                  <tr key = {key}>
                      <td>{item.id}</td>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td>{item.city}</td>
                      <td><input type="radio" name = "tobedeleted" value={item.id}/></td>
                  </tr>
                )
             })}
          </tbody>
          </table>

          <button type="submit" className="btn btn-default">Submit</button>
          </form>
       </div>

      </div>
    );
  }
}

export default ViewPeople;
