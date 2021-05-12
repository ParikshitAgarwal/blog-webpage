import React, { useState,useRef } from "react";
import { auth } from "../firebase";
import login from "./login.svg";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = (e) => {
    clearErrors()
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = (e) => {
    clearErrors()
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword( emailRef.current.value,
        passwordRef.current.value)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  return (
    <div className="signin">
      <div className="signin_left">
        <img src={login} alt="" />
        {hasAccount ? (
          <h5 onClick={() => setHasAccount(!hasAccount)}>create an account</h5>
        ) : (
          <h5 onClick={() => setHasAccount(!hasAccount)}>
            {" "}
            i am already member
          </h5>
        )}
      </div>
      <div className="form">
        {hasAccount ? <h2>Log In</h2> : <h2>Sign Up</h2>}
        <form action="" className="signin_input">
          <div className="input">
            <i class="far fa-user"></i>
            <input
              placeholder="Email"
              type="email"
              autoFocus
              required
              ref={emailRef}
            />
          </div>
          <p className="errorMsg">{emailError}</p>
          <div className="input">
            <i class="fas fa-unlock-alt"></i>
            <input
              placeholder="Password"
              type="password"
              autoFocus
              required
              ref={passwordRef}
            />
          </div>
          <p className="errorMsg">{passwordError}</p>
          <div className="btnContainer">
            {hasAccount ? (
              <button type="submit" className="button" onClick={handleLogin}>
                Log in
              </button>
            ) : (
              <button type="submit" className="button" onClick={handleSignup}>
                Sign Up
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
