import React, { Component } from "react";
import "./css/Dark.css";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import classNames from 'classnames';

class App2 extends Component {


  state ={
    darkMode: false,
  }


 onSetDarkMode = () => {
  this.setState(prevState => ({
    darkMode: !prevState.darkMode
  }));


}


  render() {

    return (
     
      <Router>
        <div className={`app ${this.state.darkMode ? "dark-mode" : "light-mode"}`}>
          {/* classNames = this.state.darkMode ? "dark-mode" : "light-mode" */}
            <div className="containerr mt-5">
              <span style={{ color: this.state.darkMode ? "grey" : "yellow" }}>
                ☀︎
              </span>
              <div className="switch-checkbox">
                <label className="switch">
                  <input type="checkbox" onChange={this.onSetDarkMode}/>
                  <span className="slider round"> </span>
                  
                </label>
              </div>
              <span style={{ color: this.state.darkMode ? "#c96dfd" : "grey" }}>
                ☽
              </span>
          
           
          </div>
          <Switch>
        

            {this.showContentMenus(routes)}
          </Switch>
        </div>
      </Router>
    );
  }

  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default App2;
