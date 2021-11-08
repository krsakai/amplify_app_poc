import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import reducer from './reducers'

import Top from './components/top';
import BaseTimeSchedule from './components/base_time_schedule';
import BaseTimeScheduleNew from './components/base_time_schedule_new';
import TempTimeSchedule from './components/temp_time_schedule';
import TempTimeScheduleNew from './components/temp_time_schedule_new';
import ACNumber from './components/ac_number';
import ACNumberNew from './components/ac_number_new';
import CFNumber from './components/cf_number';
import CFNumberNew from './components/cf_number_new';


import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import reportWebVitals from './reportWebVitals';
import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config)

const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Top}></Route>
          <Route exact path="/top" component={Top}></Route>
          <Route exact path="/base-time-schedule" component={BaseTimeSchedule}></Route>
          <Route exact path="/base-time-schedule/new" component={BaseTimeScheduleNew}></Route>
          <Route exact path="/temp-time-schedule" component={TempTimeSchedule}></Route>
          <Route exact path="/temp-time-schedule/new" component={TempTimeScheduleNew}></Route>
          <Route exact path="/ac-number" component={ACNumber}></Route>
          <Route exact path="/ac-number/new" component={ACNumberNew}></Route>
          <Route exact path="/cf-number" component={CFNumber}></Route>
          <Route exact path="/cf-number/new" component={CFNumberNew}></Route>
          <Route path="/events/new" component={EventsNew}></Route>
          <Route path="/events/:id" component={EventsShow}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root"),
);
reportWebVitals();
