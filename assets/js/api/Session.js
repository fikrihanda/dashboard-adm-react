import {get, post} from 'axios'

export default {
  async check() {
    try {
      let res = await get('/session/check')
      return res.data
    } catch (err) {
      return Promise.reject(err)
    }
  },
  async login(username, password) {
    try {
      let res = await post('/session/login', {
        username, password
      })
      return res.data
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
