import {get} from 'axios'
export default {
  async check() {
    try {
      let res = await get('/session/check')
      return res.data
    } catch (err) {
      return Promise.reject(err)
    }
  }
}