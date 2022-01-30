import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { commonReducer } from "./reducers/commonReducer";
import { userReducer } from "./reducers/userReducer";

const middleware = [thunk];
export const store = createStore(
  combineReducers({
    common: commonReducer,
    user: userReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);
