import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import App2 from "./App2";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import { createStore,applyMiddleware } from "redux";
import appReducers from "./reducers/index";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';


const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

  );
  const store2 = createStore(
    appReducers,
    applyMiddleware(thunk)
    );

ReactDOM.render(
  <Provider store ={store, store2} >
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
        <App2 />
      </StateProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
