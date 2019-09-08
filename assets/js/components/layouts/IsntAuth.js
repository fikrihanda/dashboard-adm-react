import React, {Component} from 'react'

export default class IsntAuth extends Component {
  render() {
    let {children} = this.props
    return (
      <div className='mt-3 d-flex align-items-center justify-content-center'>
        {children}
      </div>
    )
  }
}
