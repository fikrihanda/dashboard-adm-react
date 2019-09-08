import configureStoreDev from '@/js/store/configureStore.dev'
import configureStoreProd from '@/js/store/configureStore.prod'

const selectedConfigureStore = 
  process.env.NODE_ENV === 'production'
  ? configureStoreProd : configureStoreDev

export const {configureStore, history} = selectedConfigureStore