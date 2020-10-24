import React, { Component } from 'react';
import Contacts from './component/contacts';
import Tabs from './component/Tabs';
import Quotations from './component/Quotations';
import QuotationPage from './component/QuotationPage';
import InsertPage from './component/InsertPage';
import "./App.css";

class App extends Component {

  render() {
    return (
      <Tabs>
      <div label="Insert">
        <InsertPage />
      </div>
       <div label="Display">
         <QuotationPage />
       </div>
     </Tabs>
    );
  }
}

export default App;
