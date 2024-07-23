const store = require("./store");
const { changeNameAction } = require("./store/actioncreators");


store.dispatch(changeNameAction('name'))