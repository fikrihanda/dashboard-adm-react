import React, {Component} from 'react'
import {
  Toast,
  ToastHeader,
  ToastBody
} from 'reactstrap'
import {capitalize} from 'lodash'

export default class NotificationCustom extends Component {
  constructor(props) {
    super(props)
    this.iconType = this.iconType.bind(this)
  }

  iconType() {
    let {type} = this.props
    let typeClass = ''
    switch (type) {
      case 'success':
        typeClass = 'fa-check-circle'
        break
      case 'warning':
        typeClass = 'fa-exclamation-circle'
        break
      case 'info':
        typeClass = 'fa-question-circle'
        break
      case 'danger':
        typeClass = 'fa-times-circle'
        break
      default:
        typeClass = 'fa-check-circle'
        break
    }
    return (<i className={typeClass} />)
  }

  render() {
    let {type, message} = this.props
    return (
      <Toast>
        <ToastHeader icon={this.iconType()}>
          {capitalize(type)}
        </ToastHeader>
        <ToastBody>
          {message}
        </ToastBody>
      </Toast>
    )
  }
}
