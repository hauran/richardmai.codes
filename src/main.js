import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, combineReducers } from 'redux'
import { ReduxRouter, routerStateReducer, reduxReactRouter } from 'redux-router'
import { Route, Link } from 'react-router'
import { Provider, connect } from 'react-redux'
import createHistory from 'history/lib/createHashHistory'

// REDUCERS
import data from './reducers/data'

const reducer = combineReducers({
  router: routerStateReducer,
  data
})

const history = createHistory({
  queryKey: false
})

const store = compose(
  reduxReactRouter({ history })
)(createStore)(reducer)

// ROUTES
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ReduxRouter>
            <Route path="/" component={Portfolio}/>
            <Route path="/resume" component={Resume}/>
          </ReduxRouter>
        </Provider>
      </div>
    )
  }
}
// window.location.hash='streamliner_ui'
// window.location.hash='conversion_funnel'

ReactDOM.render(<Root/>, document.getElementById('app'))
