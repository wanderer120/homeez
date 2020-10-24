import React from 'react'

const Quotations = ({ quotations }) => {
  return (
    <div>
      <center><h1>Quotations</h1></center>
      {quotations.map((quotations) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{quotations.q_id}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{quotations.quotation_info}</h6>
            <p class="card-text">{quotations.quatation_valid}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Quotations
