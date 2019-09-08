import React, {Component} from 'react'
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
    return (<i className={'fa fa-fw ' + typeClass} />)
  }

  render() {
    let {type, message} = this.props
    return (
      <div className={'alert alert-' + type + ' w-100 mb-0 border-0'}>
        <h4 className='alert-heading'>
          {this.iconType()} {capitalize(type)}
        </h4>
        <p className='m-0'>
          {message}
        </p>
      </div>
    )
  }
}
