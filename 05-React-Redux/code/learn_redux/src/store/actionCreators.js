const { CHANGE_NAME, ADD_COUNTER } = require("./constants")

// actionCreators：帮助我们创建action
const changeNameAction = (name) => ({ type: CHANGE_NAME, name })
const addCounterAction = (num) => ({ type: ADD_COUNTER, num })

module.exports = {
  changeNameAction,
  addCounterAction
}