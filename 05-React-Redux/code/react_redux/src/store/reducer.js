import * as actionType from './constants'

const initialState = {
  count: 100,
  banners: [],
  recommends: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.ADD_NUM:
      return { ...state, count: state.count + action.num }
    case actionType.SUB_NUM:
      return { ...state, count: state.count - action.num }
    case actionType.CHANGE_BANNERS:
      return { ...state, banners: action.banners }
    case actionType.CHANGE_RECOMMENDS:
      return { ...state, recommends: action.recommends }
    default:
      return state
  }
}

export default reducer