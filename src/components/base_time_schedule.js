import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBaseTimeSchedules } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom' 
import { 
  Table, 
  TableBody, 
  TableHeader, 
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add';
import Header from './header' 

class BaseTimeSchedule extends Component {
  componentDidMount() {
    this.props.fetchBaseTimeSchedules()
  }

  fetchBaseTimeSchedules() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.acId}</TableRowColumn>
        <TableRowColumn>{event.dayOfWeek}</TableRowColumn>
        <TableRowColumn>{event.startTime}</TableRowColumn>
        <TableRowColumn>{event.endTime}</TableRowColumn>
        <TableRowColumn>{event.cfId}</TableRowColumn>
      </TableRow>
    ))
  }

  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12
    }
    return (
      <React.Fragment>
        <Header title="基本スケジュール" goBack={<Link to="/"/>}></Header>
        <FloatingActionButton style={style} backgroundColor="#004499" containerElement={<Link to="/base-time-schedule/new"/>}>
          <ContentAdd />
        </FloatingActionButton>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>ACID</TableHeaderColumn>
              <TableHeaderColumn>曜日</TableHeaderColumn>
              <TableHeaderColumn>開始時間</TableHeaderColumn>
              <TableHeaderColumn>終了時間</TableHeaderColumn>
              <TableHeaderColumn>CFID</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            { this.fetchBaseTimeSchedules() }
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ fetchBaseTimeSchedules })

export default connect(mapStateToProps, mapDispatchToProps)(BaseTimeSchedule)
