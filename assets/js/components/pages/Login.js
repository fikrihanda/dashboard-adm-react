import React, {Component} from 'react'
import {withRouter, Redirect} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {store} from 'react-notifications-component'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap'
import {login} from '@/js/actions/session'
import {ValidForm, ValidInput, ValidButton} from '@/js/validations/Hoc'
import {required} from '@/js/validations/Define'
import NotificationCustom from '@/js/components/partials/NotificationCustom'

const mapStateToProps = function(state) {
  return {
    session: state.session
  }
}

const mapDispatchToProps = function(dis) {
  return bindActionCreators({login}, dis)
}

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.changeInput = this.changeInput.bind(this)
  }

  async login(e) {
    e.preventDefault()
    try {
      let {login} = this.props
      let {username, password} = this.state
      await login(username, password)
      return (<Redirect to='/' />)
    } catch (err) {
      store.addNotification({
        width: 300,
        container: 'bottom-right',
        content: (
          <NotificationCustom type='danger' message={err.response.data.message}/>
        ),
        dismiss: { duration: 2000 },
        dismissable: { click: true }
      })
    }
  }

  changeInput(state, e) {
    this.setState({
      [state]: e.target.value
    })
  }

  render() {
    return (
      <ValidForm className='card login' onSubmit={this.login}>
        <div className='card-header'>
          Login
        </div>
        <div className='card-body'>
          <InputGroup className='mb-3'>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className='fa fa-user fa-fw' />
              </InputGroupText>
            </InputGroupAddon>
            <ValidInput type='text'
                        className='form-control'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={(e) => this.changeInput('username', e)}
                        validations={[required]} />
          </InputGroup>
          <InputGroup className='mb-3'>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className='fa fa-lock fa-fw' />
              </InputGroupText>
            </InputGroupAddon>
            <ValidInput type='password'
                        className='form-control'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={(e) => this.changeInput('password', e)}
                        validations={[required]} />
          </InputGroup>
          <ValidButton className='btn btn-primary btn-block'>
            Login
          </ValidButton>
        </div>
      </ValidForm>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
