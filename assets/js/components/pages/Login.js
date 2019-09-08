import React, {Component} from 'react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap'
import {ValidForm, ValidInput, ValidButton} from '@/js/validations/Hoc'
import {required} from '@/js/validations/Define'

export default class Login extends Component {
  render() {
    return (
      <ValidForm className='card login'>
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
            <ValidInput type='text' className='form-control' placeholder='Username' validations={[required]} />
          </InputGroup>
          <InputGroup className='mb-3'>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className='fa fa-lock fa-fw' />
              </InputGroupText>
            </InputGroupAddon>
            <ValidInput type='password' className='form-control' placeholder='Password' validations={[required]} />
          </InputGroup>
          <ValidButton className='btn btn-primary btn-block'>
            Login
          </ValidButton>
        </div>
      </ValidForm>
    )
  }
}
