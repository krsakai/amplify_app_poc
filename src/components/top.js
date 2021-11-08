import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom' 
import RaisedButton from 'material-ui/RaisedButton'
import Header from './header' 

class Top extends Component {
  render() {
    const style = { margin: 12, width: 200, height: 200}
    const labelStyle = { fontSize: '18px'}
    return (
      <div>
        <Header title="Top"></Header>
        <RaisedButton label="基本スケジュール" style={style} labelStyle={labelStyle} containerElement={<Link to="/base-time-schedule" />} />
        <RaisedButton label="臨時スケジュール" style={style} labelStyle={labelStyle} containerElement={<Link to="/temp-time-schedule" />} />
        <RaisedButton label="ACマスタ" style={style} labelStyle={labelStyle} containerElement={<Link to="/ac-number" />} />
        <RaisedButton label="CFマスタ" style={style} labelStyle={labelStyle} containerElement={<Link to="/cf-number" />}  />
      </div>
    );
  }
}

export default connect(null, null)(Top)