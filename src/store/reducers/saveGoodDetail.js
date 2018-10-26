import { handleActions } from 'redux-actions'
import { SAVEGOODDETAIL } from '../types/saveGoodDetail'

const defaultState = {
  goodDetail: {}
}

export default handleActions({
  [SAVEGOODDETAIL](state, action) {
    state.goodDetail = action.payload
    return {
      ...state,
      goodDetail: state.goodDetail
    }
  }
}, defaultState)
