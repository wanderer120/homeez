import React from 'react'

const Quotations = ({ quotations }) => {
  return (
    <div>
      <center><h1>Quotations</h1></center>
      <table>
      <tr><th>q_id</th><th>quotation_info</th><th>quatation_valid</th></tr>
      {quotations.map((quotations) => (
        <tr>
        <td>{quotations.q_id.toString()}</td>
        <td>{quotations.quotation_info}</td>
        <td>{quotations.quatation_valid.toString()}</td>
        </tr>
      ))}
      </table>
    </div>
  )
};

export default Quotations
