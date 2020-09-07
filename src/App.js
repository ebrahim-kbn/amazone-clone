import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: actionTypes.SET_USER, payload: authUser });
      } else {
        dispatch({ type: actionTypes.SET_USER, payload: null });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  console.log(user);
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* <Route exact path="/" component={Login} /> */}
          <Route exact path="/" component={Login}>
            <Header />
            <Home />
          </Route>

          <Route exact path="/login" component={Login} />
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route>
            <h1>Page Not Found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
