import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import modules from '@/js/reducers/modules'

export default function (history) {
  return combineReducers({
    router: connectRouter(history),
    ...modules
  })
}