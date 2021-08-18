import ReactDOM from "react-dom";
import { AppContainer } from "./container/app-container";
import { store } from "./store";
import { Provider } from "react-redux";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  rootElement
);
