import * as actionType from './constants'

export const addNumAction = num => ({ type: actionType.ADD_NUM, num })

export const subNumAction = num => ({ type: actionType.SUB_NUM, num })