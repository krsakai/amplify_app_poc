import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCFNumbers } from '../actions'
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

class CFNumber extends Component {
  componentDidMount() {
    this.props.fetchCFNumbers()
  }

  fetchCFNumbers() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>{event.arn}</TableRowColumn>
        <TableRowColumn>{event.name}</TableRowColumn>
      </TableRow>
    ))
  }

  render() {
    const style = { position: "fixed", right: 25, bottom: 25};
    return (
      <React.Fragment>
        <Header title="CFマスタ" goBack={<Link to="/"/>}></Header>
        <FloatingActionButton style={style} backgroundColor="#004499" containerElement={<Link to="/cf-number/new"/>}>
          <ContentAdd />
        </FloatingActionButton>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>CFID</TableHeaderColumn>
              <TableHeaderColumn>ARN</TableHeaderColumn>
              <TableHeaderColumn>名前</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            { this.fetchCFNumbers() }
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ fetchCFNumbers })

export default connect(mapStateToProps, mapDispatchToProps)(CFNumber)