const applyMiddleware = (store, ...fns) =>{
  fns.forEach(item => item(store))
}

export default applyMiddleware