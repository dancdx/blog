import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import Base from './components/base'

import Login from './page/login'
import Register from './page/register'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>     
      <Base>
        <Route exact path='/' component={Login} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Base>  
    </Router>
  </Provider>
  
)
export default Root