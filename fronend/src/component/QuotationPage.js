import React, { Component } from 'react';
import Quotations from './quotations';

class QuotationPage extends Component {
  state = {
        quotations: []
      };
  componentDidMount() {
    fetch('https://testreact-backend.herokuapp.com')
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
