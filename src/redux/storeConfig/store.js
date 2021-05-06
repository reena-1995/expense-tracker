import { createStore, applyMiddleware, compose } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import rootReducer from "../reducers/rootReducer"

const middlewares = [thunk,logger]

const composeEnhancers = compose
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
)


export { store }
