import React, { Component } from 'react';

class InsertPage extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    fetch('http://ec2-3-138-137-217.us-east-2.compute.amazonaws.com:3000/addQuotation',{
  method: 'PUT',
  headers: new Headers({
             'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
    }),
  body: '{"qInfo":"'+this.state.value+'","qValid":"TRUE"}' // <-- PUT parameters
})
    .then(res => res.json())
    .then((data) => {
      this.setState({ value: '' });
    })
    .catch(console.log)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Quotation Info:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InsertPage
