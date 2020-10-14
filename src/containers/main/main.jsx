import React from "react"
import {Switch, Route} from 'react-router-dom'

import LaobanInfo from "../laoban-info/laoban-info";
import DashenInfo from "../dashen-info/dashen-info";

export default class Main extends React.Component{
  render() {
    return (
        <div>
          <Switch>
            <Route path='/laobaninfo' component={LaobanInfo}/>
            <Route path='/dasheninfo' component={DashenInfo}/>
          </Switch>
        </div>
    )
  }
}