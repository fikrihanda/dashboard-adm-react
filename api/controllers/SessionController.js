const bcrypt = require('bcrypt')

module.exports = {
  async check(req, res) {
    try {
      let {admin} = req.session
      if (_.isEmpty(admin)) return res.badRequest({message: 'Username tidak ada'})
      let getAdm = await Admins.findOne({username: admin.username})
      if (_.isEmpty(getAdm)) {
        delete req.session.admin
        return res.badRequest({message: 'Username tidak ada'})
      }
      res.json({name: getAdm.name})
    } catch (err) {
      res.serverError(err)
    }
  },
  async login(req, res) {
    try {
      if (req.method !== 'POST') return res.notFound()
      let {username, password} = req.allParams()
      let admin = await Admins.findOne({username})
      if (_.isEmpty(admin)) return res.badRequest({message: 'Username tidak ada'})
      let check = await bcrypt.compare(password, admin.password)
      if (!check) return res.badRequest({message: 'Password anda salah'})
      req.session.admin = {name: admin.name}
      res.json({name: admin.name})
    } catch (err) {
      res.serverError(err)
    }
  }
}
