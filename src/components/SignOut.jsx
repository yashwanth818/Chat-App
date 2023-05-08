import React from "react";
import { Button } from "@material-ui/core";
import { auth } from "../firebase.js";
import "../App.css";

function SignOut() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        width: "100%",
        backgroundColor: "#c9eeff",

        top: 0,
        borderBottom: "solid 1px #c9eeff",
        zIndex: "10",
      }}
    >
      <Button
        style={{
          backgroundColor: "#62CDFF",
          padding: "20px",
          fontSize: "15px",
          borderRadius: "5%",
          color: "white",

          fontWeight: "600",
        }}
        onClick={() => auth.signOut()}
      >
        Sign Out
      </Button>
    </div>
  );
}
export default SignOut;
