const config = require('./config/connections.json')
const Pool = require('pg').Pool
const pool = new Pool(config.cmsConnection)

const getPlayers = (request, response) => {
  pool.query('select * from players limit 1', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getWonderpotByAgent = (request, response) => {
  let agentId = request.params.agentId
  pool.query('select * from sidebet_operators where agent_id = $1', [agentId], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const addWonderpotByAgent = (request, response) => {
  let agentId = request.params.agentId
  let rawBody = JSON.parse(request.rawBody)
  let key = rawBody.key
  let secret = rawBody.secret
  pool.query(
    "INSERT INTO sidebet_operators (id, agent_id, authentication_key, authentication_secret, auto_opt_in) VALUES(md5(random()::text || clock_timestamp()::text)::uuid, $1, $2, $3, false)",
    [agentId, key, secret],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(JSON.parse('{"message":"ok"}'))
    }
  )
}
module.exports = {
  getPlayers,
  getWonderpotByAgent,
  addWonderpotByAgent
}
