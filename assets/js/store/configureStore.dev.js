import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {createHashHistory} from 'history'
import {routerMiddleware, routerActions} from 'connected-react-router'
import {createLogger} from 'redux-logger'
import createRootReducer from '@/js/reducers'
import * as sessionActions from '@/js/actions/session'

const history = createHashHistory()
const rootReducer = createRootReducer(history)
const configureStore = function (initialState) {
  let middleware = []
  let enhancers = []

  middleware.push(thunk)

  let logger = createLogger({
    level: 'info',
    collapsed: true
  })

  let router = routerMiddleware(history)
  middleware.push(router)

  let actionCreators = {
    ...routerActions,
    ...sessionActions
  }

  let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actionCreators
    })
    : compose

  enhancers.push(applyMiddleware(...middleware))
  let enhancer = composeEnhancers(...enhancers)

  return createStore(rootReducer, initialState, enhancer)
}

export default {configureStore, history}