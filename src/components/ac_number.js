import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchACNumbers } from '../actions'
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

class ACNumber extends Component {
  componentDidMount() {
    this.props.fetchACNumbers()
  }

  fetchACNumbers() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>{event.number}</TableRowColumn>
      </TableRow>
    ))
  }

  render() {
    const style = { position: "fixed", right: 12, bottom: 12};
    return (
      <React.Fragment>
        <Header title="ACマスタ" goBack={<Link to="/"/>}></Header>
        <FloatingActionButton style={style} backgroundColor="#004499" containerElement={<Link to="/ac-number/new"/>}>
          <ContentAdd />
        </FloatingActionButton>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>ACID</TableHeaderColumn>
              <TableHeaderColumn>AC番号</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            { this.fetchACNumbers() }
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ fetchACNumbers })

export default connect(mapStateToProps, mapDispatchToProps)(ACNumber)
