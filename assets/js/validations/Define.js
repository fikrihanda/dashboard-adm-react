import {isEmail} from 'validator'
import {isEmpty} from 'lodash'

export const required = function(value, props) {
  if (
    isEmpty(value)
    ||
    (props.isCheckable && !props.checked)
  ) return 'Field input harus diisi'
}

export const email = function(value) {
  if (!isEmail(value)) return 'format email salah'
}
