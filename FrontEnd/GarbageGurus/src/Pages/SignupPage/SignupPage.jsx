//importing styles
import styles from "./SignupPage.module.css";

//importing icons
import { IoIosArrowDropright } from "react-icons/io";

//import hooks
import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";

//importing Actions
import { authSliceActions, auth } from "../../store/Slices/AuthSlice/authSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupPage = () => {
  const dispatch = useDispatch();
  //calling Hooks
  const emailRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();

  const handleSubmit = () => {
    // console.log("button is clicked");
    passRef.current.value === confirmPassRef.current.value
      ? createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passRef.current.value
        )
          .then((user_credential) =>
            dispatch(authSliceActions.set_user(user_credential.user.uid))
          )
          .catch((err) => alert(err))
      : alert("Password doesn't match");
  };
  return (
    <>
      <div className={styles.hero}>
        <p style={{ color: "#fff", marginBottom: "0.3rem" }}>Welcome</p>
        <h2 style={{ color: "#fff" }}>
          Fill the form
          <br />
          to become
          <br />
          part of
          <br />
          team.
        </h2>
      </div>
      <div className={styles.input_container}>
        <input type="email" ref={emailRef} placeholder="Enter Email" />
        <input type="password" ref={passRef} placeholder="Password" />
        <input
          type="password"
          ref={confirmPassRef}
          placeholder="Confirm Password"
        />
        <button onClick={handleSubmit} className={styles.btn}>
          Go &nbsp; <IoIosArrowDropright style={{ fontWeight: "650" }} />
        </button>
      </div>
    </>
  );
};

export default SignupPage;
