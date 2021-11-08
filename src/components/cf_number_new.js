import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCFNumber } from '../actions'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom' 
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import AlertDialog from './alert_dialog'
import Header from './header' 

class CFNumberNew extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error }} = field
    return (
      <TextField 
        hintText={label} 
        floatingLabelText={label} 
        type={type} 
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
    )
  }

  async onSubmit(values) {
    await this.props.createCFNumber(values)
    this.props.history.push("/cf-number")
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = { margin: 12}
    const styleBox = { marginLeft: 40, marginRight: 40}
    return (
      <React.Fragment>
        <AlertDialog isOpen={true}></AlertDialog>
        <Header title="CFマスタ登録" goBack={<Link to="/cf-number" />}></Header>
        <form style={styleBox} onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field label="CFID" name="id" type="text" component={this.renderField} />
          </div>
          <div>
            <Field label="ARN" name="arn" type="text" component={this.renderField} />
          </div>
          <div>
            <Field label="名前" name="name" type="text" component={this.renderField} />
          </div>
          <div>
            <RaisedButton label="登録" type="submit" style={style} disabled={pristine || submitting || invalid} />
            <RaisedButton label="キャンセル" style={style} containerElement={<Link to="/cf-number" />} />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const validate = values => {
  const errors = {}
  if (!values.id) errors.id = "CFIDを入力してください"
  if (!values.arn) errors.arn = "ARNを入力してください"
  if (!values.name) errors.name = "名前を入力してください"
  return errors
}
const mapDispatchToProps = ({ createCFNumber })

export default connect(null, mapDispatchToProps)(
  reduxForm({validate, form: 'cfNumberNewForm'})(CFNumberNew)
)