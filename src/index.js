import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { firebaseApp, firestore } from "./firebaseConfig";

// Initialize the Firebase app
const storage = getStorage(firebaseApp);

ReactDOM.render(
  <Fragment>
    <App firestore={firestore} storage={storage} />
  </Fragment>,
  document.getElementById("root")
);
