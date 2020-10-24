import React, { Component } from 'react';
import Contacts from './component/contacts';
import Quotations from './component/Quotations';

class App extends Component {
  state = {
        quotations: []
      };
  componentDidMount() {
    fetch('http://ec2-3-18-106-128.us-east-2.compute.amazonaws.com:3000/getQuotations')
    .then(res => res.json())
    .then((data) => {
      this.setState({ quotations: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <Quotations quotations={this.state.quotations} />
    );
  }
}

export default App;
