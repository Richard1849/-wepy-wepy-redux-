import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT, SAVEGOODINFO } from '../types/counter'

export default handleActions({
  [SAVEGOODINFO] (state) {
    return {
      ...state,
      goodInfo: state.goodInfo
    }
  },
  [INCREMENT] (state) {
    return {
      ...state,
      num: state.num + 1
    }
  },
  [DECREMENT] (state) {
    return {
      ...state,
      num: state.num - 1
    }
  },
  [ASYNC_INCREMENT] (state, action) {
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload
    }
  }
}, {
  num: 0,
  asyncNum: 0,
  goodInfo: {
    name: 'abc'
  }
})
