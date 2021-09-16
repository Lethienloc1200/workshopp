
import React, { useEffect,useState } from "react";
import "./css/App.css";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";


function App() {

  const [{}, dispatch] = useStateValue();
  //dark àn light background

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);



  return (
      <div></div>

  );
}



export default App;
