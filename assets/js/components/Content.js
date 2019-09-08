import React, {Component, Fragment} from 'react'
import ReactNotification from 'react-notifications-component'
import IsAuth from '@/js/components/layouts/IsAuth'
import IsntAuth from '@/js/components/layouts/IsntAuth'
import NavBar from '@/js/components/partials/NavBar'

export default class Content extends Component {
  components = {IsAuth, IsntAuth}

  constructor(props) {
    super(props)
    this.layouts = this.layouts.bind(this)
  }

  layouts() {
    let {children, layouts, session} = this.props
    let Cmp = this.components[layouts]
    return (<Cmp session={session}>{children}</Cmp>)
  }

  render() {
    let {session} = this.props
    return (
      <Fragment>
        <NavBar session={session} />
        {this.layouts()}
        <ReactNotification />
      </Fragment>
    )
  }
}
