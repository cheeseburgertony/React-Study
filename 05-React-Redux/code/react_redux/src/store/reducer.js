import * as actionType from './constants'

const initialState = {
  count: 100
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.ADD_NUM:
      return { ...state, count: state.count + action.num }
    case actionType.SUB_NUM:
      return { ...state, count: state.count - action.num }
    default:
      return state
  }
}

export default reducer