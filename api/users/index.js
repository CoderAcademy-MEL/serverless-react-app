const User = require('../db/models/User')
const connectToDb = require('../db/index')

module.exports = async (req, res) => {
  await connectToDb()
  const { method } = req
  if (method === 'GET') {
    return res.send(await User.find())
  } else if (method === 'POST') {
    try {
      const user = new User(req.body)
      const savedUser = await user.save()
      return res.send(savedUser)
    } catch (err) {
      return res.send(err)
    }
  } else {
    return res.status(404).send(`cannot ${method} '/users'`)
  }
}
