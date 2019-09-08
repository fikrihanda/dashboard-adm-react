import React, {Fragment} from 'react';
import {form, control, button} from 'react-validation';

const Form = function ({getValues, validate, validateAll, showError, hideError, children, ...props}) {
  return (
    <form action='#' {...props}>
      {children}
    </form>
  );
};

const Input = function ({error, isChanged, isUsed, ...props}) {
  return (
    <Fragment>
      <input {...props}
             className={[props.className, isChanged && isUsed && error ? 'is-invalid' : null].join(' ')}/>
      {
        isChanged && isUsed &&
        <div className='invalid-feedback'>
          {error}
        </div>
      }
    </Fragment>
  );
};

const Select = function ({error, isChanged, isUsed, children, ...props}) {
  return (
    <Fragment>
      <select {...props}
              className={[props.className, isChanged && isUsed && error ? 'is-invalid' : null].join(' ')}>
        {children}
      </select>
      {
        isChanged && isUsed &&
        <div className='invalid-feedback'>
          {error}
        </div>
      }
    </Fragment>
  );
};

const Textarea = function ({error, isChanged, isUsed, children, ...props}) {
  return (
    <Fragment>
      <textarea {...props}
                className={[props.className, isChanged && isUsed && error ? 'is-invalid' : null].join(' ')}>
        {children}
      </textarea>
      {
        isChanged && isUsed &&
        <div className='invalid-feedback'>
          {error}
        </div>
      }
    </Fragment>
  );
};

const Button = function ({hasErrors, ...props}) {
  return (
    <button {...props} disabled={hasErrors}/>
  );
};

export const ValidForm = form(Form);
export const ValidInput = control(Input);
export const ValidSelect = control(Select);
export const ValidTextarea = control(Textarea);
export const ValidButton = button(Button);
