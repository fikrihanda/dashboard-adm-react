import React, {Component} from 'react'
import {Switch, Route, withRouter} from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {checkSession} from '@/js/actions/session'
import Content from '@/js/components/Content'
import routes from '@/js/routes/route'

const mapStateToProps = function(state) {
  return {
    session: state.session
  }
}

const mapDispatchToProps = function(dis) {
  return bindActionCreators({checkSession}, dis)
}

class Routes extends Component {

  static routesMap() {
    return routes.map((r, i) => (
      <Route path={r.path} component={r.component} exact key={'routes' + i}/>
    ))
  }

  state = {
    layouts: 'IsntAuth'
  }

  constructor(props) {
    super(props)
    this.onRouteChange = this.onRouteChange.bind(this)
    this.setLayout = this.setLayout.bind(this)
  }

  async componentDidMount() {
    await this.onRouteChange(location)
    this.setLayout()
    this.props.history.listen(async (location) => {
      await this.onRouteChange(location)
      this.setLayout()
    })
  }

  setLayout() {
    let {session} = this.props
    this.setState({
      layouts: session.auth ? 'IsAuth' : 'IsntAuth'
    })
  }

  async onRouteChange() {
    let {checkSession, session, history} = this.props
    await checkSession()
    if (session.auth) {
      if (history.location.pathname === '/login')
        return history.replace({pathname: '/'})
    } else {
      if (history.location.pathname !== '/login')
        return history.replace({pathname: '/login'})
    }
  }

  render() {
    let {layouts} = this.state
    let {session} = this.props
    return (
      <Content layouts={layouts} session={session || null}>
        <Switch>
          {Routes.routesMap()}
        </Switch>
      </Content>
    )
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes))
