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

export const destroySession = function(session) {
  return {
    type: DESTROY_SESSION
  }
}

export const checkSession = function() {
  return async function (dis, getState) {
    try {
      let {session} = getState()
      let check = await Session.check()
      if (!session.auth) dis(setSession({auth: true, name: check.name}))
      else dis(updateSession({name: check.name}))
      return Promise.resolve()
    } catch (err) {
      dis(destroySession())
      return Promise.resolve()
    }
  }
}