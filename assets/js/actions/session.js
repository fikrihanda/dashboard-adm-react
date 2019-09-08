import {Session} from '@/js/api'

export const SET_SESSION = 'SET_SESSION'
export const UPDATE_SESSION = 'UPDATE_SESSION'
export const DESTROY_SESSION = 'DESTROY_SESSION'

export const setSession = function(session) {
  return {
    type: SET_SESSION,
    session
  }
}

export const updateSession = function(session) {
  return {
    type: UPDATE_SESSION,
    session
  }
}

export const destroySession = function() {
  return {
    type: DESTROY_SESSION
  }
}

export const checkSession = function() {
  return async function(dis, getState) {
    let {session} = getState()
    try {
      let check = await Session.check()
      if (!session.auth) dis(setSession({auth: true, name: check.name}))
      else dis(updateSession({name: check.name}))
      return Promise.resolve()
    } catch (err) {
      if (session.auth) dis(destroySession())
      return Promise.resolve()
    }
  }
}

export const login = function(username, password) {
  return async function(dis) {
    try {
      let logIn = await Session.login(username, password)
      dis(setSession({auth: true, name: logIn.name}))
      return Promise.resolve()
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
