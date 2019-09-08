import React, {Component, Fragment} from 'react'
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {

  state = {
    isOpen: false
  }

  constructor(props) {
    super(props)
    this.navbarMenu = this.navbarMenu.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  navbarMenu() {
    let {session} = this.props
    return (
      session.auth &&
      <Fragment>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {session.name || 'Admin'}
              </DropdownToggle>
              <DropdownMenu right>
                <Link to='/setting' className='dropdown-item'>
                  <i className='fa fa-cogs fa-fw' />
                  &nbsp; Setting
                </Link>
                <DropdownItem>
                  <i className='fa fa-sign-out fa-fw' />
                  &nbsp; Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Fragment>
    )
  }

  render() {
    return (
      <Navbar color='dark' expand='lg' dark>
        <Link to='/' className='navbar-brand'>
          Dashboard ADM
        </Link>
        {this.navbarMenu()}
      </Navbar>
    )
  }
}
