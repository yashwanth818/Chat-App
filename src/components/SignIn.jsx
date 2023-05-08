import React from "react";

import firebase from "firebase/compat/app";
import { auth } from "../firebase";
import GoogleButton from "react-google-button";

function SignIn() {
  function signInwithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div
      style={{
        backgroundColor: "#c9eeff",
        display: "flex",

        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: "#62CDFF",
          display: "flex",
          justifyContent: "center",
          height: "90vh",
          width: "70vh",
          alignItems: "center",
          borderRadius: "5%",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            paddingBottom: "80px",
            fontFamily: "Ubuntu",
            fontWeight: 700,
            textShadow: "3px 3px #6DA9E4",
          }}
        >
          Chat-App
        </h1>

        <GoogleButton onClick={signInwithGoogle} />
      </div>
    </div>
  );
}
export default SignIn;
