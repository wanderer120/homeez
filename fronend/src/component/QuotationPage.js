import React, { Component } from 'react';
import Quotations from './Quotations';

class QuotationPage extends Component {
  state = {
        quotations: []
      };
  componentDidMount() {
    fetch('http://ec2-3-138-137-217.us-east-2.compute.amazonaws.com:3000/getQuotations')
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

export default QuotationPage
