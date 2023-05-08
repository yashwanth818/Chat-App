import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
import { auth, firestore_db } from "../firebase";
import firebase from "firebase/compat/app";
import "../App.css";
function SendMessage({ scroll }) {
  const [msg, setmsg] = useState("");
  async function submitted(event) {
    event.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await firestore_db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setmsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <form onSubmit={submitted}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "10%",
              marginBottom: "-3px",
            }}
            value={msg}
            onChange={(event) => {
              setmsg(event.target.value);
            }}
            placeholder="message..."
          />
          <Button
            style={{
              width: "18%",
              fontSize: "15px",
              fontWeight: "550",
              margin: "4px 5% -13px 5%",
              maxWidth: "200px",
              backgroundColor: "#62CDFF",
            }}
            type="submit"
          >
            SEND
          </Button>
        </div>
      </form>
    </div>
  );
}
export default SendMessage;
