import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from "./redux/store";
import Register from "./containers/register/register";
import Login from "./containers/login/login";
import Main from "./containers/main/main";

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route component={Main}/>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
