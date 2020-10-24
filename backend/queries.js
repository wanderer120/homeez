const config = require('./config/connections.json')
const Pool = require('pg').Pool
const pool = new Pool(config.cmsConnection)

const getQuotations = (request, response) => {
  pool.query('select * from Quotation order by 1', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addQuotation = (request, response) => {
  let agentId = request.params.agentId
  let rawBody = JSON.parse(request.rawBody)
  let qInfo = rawBody.qInfo
  let qValid = rawBody.qValid
  pool.query(
    "INSERT INTO quotation (quotation_info, quatation_valid) VALUES($1, $2)",
    [qInfo, qValid],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(JSON.parse('{"message":"ok"}'))
    }
  )
}
module.exports = {
  getQuotations,
  addQuotation
}
