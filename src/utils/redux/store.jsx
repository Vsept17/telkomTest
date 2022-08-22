import { applyMiddleware, legacy_createStore } from "redux";
import { createLogger } from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import reducer from "./reducer";


// const logger = createLogger();

// const enhanchers = applyMiddleware(promiseMiddleware, logger);

const reduxStore = legacy_createStore(reducer);
export default reduxStore;
