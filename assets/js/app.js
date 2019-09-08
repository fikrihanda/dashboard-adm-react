import React, {Fragment} from 'react'
import {render} from 'react-dom'
import Root from '@/js/components/Root'
import {configureStore, history} from '@/js/store/configureStore'

const store = configureStore()

render(
  <Fragment>
    <Root store={store} history={history} />
  </Fragment>
  , document.getElementById('app')
)
