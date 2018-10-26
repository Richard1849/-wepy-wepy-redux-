import { combineReducers } from 'redux'
import counter from './counter'
import saveGoodDetail from './saveGoodDetail'

export default combineReducers({
  counter,
  saveGoodDetail
})
