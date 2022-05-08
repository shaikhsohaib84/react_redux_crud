import { createStore } from "redux";
import reducers from "./reducer/index";

const Store = createStore(
  reducers, // reduser
  {}, //state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default Store;
