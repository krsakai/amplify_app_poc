import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCFNumber } from '../actions'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom' 
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import AlertDialog from './alert_dialog'

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
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <AlertDialog isOpen={true}></AlertDialog>
        <div>
          <Field 
            label="CFID" 
            name="id" 
            type="text" 
            component={this.renderField} 
          />
        </div>
        <div>
          <Field 
            label="ARN" 
            name="arn" 
            type="text" 
            component={this.renderField}
          />
        </div>
        <div>
          <Field 
            label="名前" 
            name="name" 
            type="text" 
            component={this.renderField}
          />
        </div>
        <div>
        <RaisedButton
          label="登録"
          type="submit"
          style={style}
          disabled={pristine || submitting || invalid}
        />
        <RaisedButton
          label="キャンセル"
          style={style}
          containerElement={<Link to="/cf-number"/>}
        />
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.cfId) errors.cfId = "CFIDを入力してください"
  if (!values.arn) errors.arn = "ARNを入力してください"
  if (!values.name) errors.name = "名前を入力してください"
  return errors
}
const mapDispatchToProps = ({ createCFNumber })

export default connect(null, mapDispatchToProps)(
  reduxForm({validate, form: 'cfNumberNewForm'})(CFNumberNew)
)