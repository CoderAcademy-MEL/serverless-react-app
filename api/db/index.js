const mongoose = require('mongoose')
let hasConnected

module.exports = () => {
  if (hasConnected) {
    return Promise.resolve()
  } else {
    return mongoose
    .connect(
      process.env.DB_URL,
      { useNewUrlParser: true, useUnifiedTopology: true },
    )
    .then((db) => {
      hasConnected = db.connections[0].readyState
    })
  }
}
