import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTempTimeSchedules } from '../actions'
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

class TempTimeSchedule extends Component {
  componentDidMount() {
    this.props.fetchTempTimeSchedules()
  }

  fetchTempTimeSchedules() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.acId}</TableRowColumn>
        <TableRowColumn>{event.startDate}</TableRowColumn>
        <TableRowColumn>{event.endDate}</TableRowColumn>
        <TableRowColumn>{event.startTime}</TableRowColumn>
        <TableRowColumn>{event.endTime}</TableRowColumn>
        <TableRowColumn>{event.cfId}</TableRowColumn>
        <TableRowColumn>{event.name}</TableRowColumn>
      </TableRow>
    ))
  }

  render() {
    const style = { position: "fixed", right: 12, bottom: 12};
    return (
      <React.Fragment>
        <Header title="臨時スケジュール" goBack={<Link to="/"/>}></Header>
        <FloatingActionButton style={style} backgroundColor="#004499" containerElement={<Link to="/temp-time-schedule/new"/>}>
          <ContentAdd />
        </FloatingActionButton>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>ACID</TableHeaderColumn>
              <TableHeaderColumn>開始年月日</TableHeaderColumn>
              <TableHeaderColumn>終了年月日</TableHeaderColumn>
              <TableHeaderColumn>開始時間</TableHeaderColumn>
              <TableHeaderColumn>終了時間</TableHeaderColumn>
              <TableHeaderColumn>CFID</TableHeaderColumn>
              <TableHeaderColumn>名称</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            { this.fetchTempTimeSchedules() }
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ fetchTempTimeSchedules })

export default connect(mapStateToProps, mapDispatchToProps)(TempTimeSchedule)
