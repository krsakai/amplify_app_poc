import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createBaseTimeSchedule } from '../actions'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom' 
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import AlertDialog from './alert_dialog'
import Header from './header' 

class BaseTimeScheduleNew extends Component {

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
    await this.props.createBaseTimeSchedule(values)
    this.props.history.push("/base-time-schedule")
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = { margin: 12}
    const styleBox = { marginLeft: 40, marginRight: 40}
    return (
      <React.Fragment>
        <AlertDialog isOpen={true}></AlertDialog>
        <Header title="基本スケジュール登録" goBack={<Link to="/base-time-schedule" />}></Header>
        <form style={styleBox} onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field label="ACID" name="acId" type="text" component={this.renderField} />
          </div>
          <div>
            <Field label="曜日" name="dayOfWeek" type="text" component={this.renderField} />
          </div>
          <div>
            <Field label="開始時間" name="startTime" type="text" component={this.renderField} />
          </div>
          <div>
            <Field label="終了時間" name="endTime" type="text" component={this.renderField} />
          </div>
          <div>
            <Field label="CFID" name="cfId" type="text" component={this.renderField} />
          </div>
          <div>
            <RaisedButton label="登録" type="submit" style={style} disabled={pristine || submitting || invalid} />
            <RaisedButton label="キャンセル" style={style} containerElement={<Link to="/base-time-schedule" />} />
          </div>
        </form>
      </React.Fragment>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.acId) errors.acId = "ACIDを入力してください"
  if (!values.dayOfWeek) errors.dayOfWeek = "曜日を入力してください"
  if (!values.startTime) errors.startTime = "開始時間を入力してください"
  if (!values.endTime) errors.endTime = "終了時間を入力してください"
  if (!values.cfId) errors.cfId = "CFIDを入力してください"
  return errors
}
const mapDispatchToProps = ({ createBaseTimeSchedule })

export default connect(null, mapDispatchToProps)(
  reduxForm({validate, form: 'baseTimeScheduleNewForm'})(BaseTimeScheduleNew)
)