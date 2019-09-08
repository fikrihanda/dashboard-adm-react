import {has} from 'lodash'
import {
  SET_SESSION,
  UPDATE_SESSION,
  DESTROY_SESSION
} from '@/js/actions/session'

const setSession = function(state, session) {
  state = session
  return state
}
const updateSession = function(state, session) {
  if (has(session, 'auth')) state.auth = session.auth
  if (has(session, 'name')) state.name = session.name
  return state
}
const destroySession = function(state) {
  state = {auth: false, name: ''}
  return state
}

export default function(
  state = {
    auth: false,
    name: ''
  },
  actions
) {
  switch (actions.type) {
    case SET_SESSION:
      return setSession(state, actions.session)
    case UPDATE_SESSION:
      return updateSession(state, actions.session)
    case DESTROY_SESSION:
      return destroySession(state)
    default:
      return state
  }
}