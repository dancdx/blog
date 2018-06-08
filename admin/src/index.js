import React from 'react'
import ReactDOM from 'react-dom'
import Root from './routers'
import { applyMiddleware, createStore, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducer'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const history = createHistory()

const middlewares = [ ReduxThunk, routerMiddleware(history) ]
if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')

  middlewares.push(logger)
}
const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer)

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducer', () => {
    const nextRootReducer = require('./reducer').default
    store.replaceReducer(nextRootReducer)
  })
}

ReactDOM.render(<Root store={store} history={history}/>, document.getElementById('root'))
registerServiceWorker()
