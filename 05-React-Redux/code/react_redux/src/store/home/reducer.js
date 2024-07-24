import * as actionType from './constants'

const initialState = {
  banners: [],
  recommends: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.CHANGE_BANNERS:
      return { ...state, banners: action.banners }
    case actionType.CHANGE_RECOMMENDS:
      return { ...state, recommends: action.recommends }
    default:
      return state
  }
}

export default reducer