//importing styles
import styles from "./LoginPage.module.css";

//importing icons
import { IoIosArrowDropright } from "react-icons/io";

//importing Hooks
import { useRef } from "react";

//importing Slice Actions
import { auth, authSliceActions } from "../../store/Slices/AuthSlice/authSlice";

//imprting fireBase Functions
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
//Main Component
const LoginPage = () => {
  //Calling Hooks
  const emailRef = useRef();
  const passRef = useRef();
  const dispatch = useDispatch();

  //Handling Submission
  const handleSubmit = () => {
    // console.log("handleSubmit invoked");
    emailRef.current.value == "" || passRef.current.value == ""
      ? alert("Please fill the empty fields")
      : signInWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passRef.current.value
        ).then((user_credential) => dispatch(authSliceActions.set_user(user_credential.user.uid))).catch((err)=> alert(err));
  };
  //Main Component
  return (
    <>
      <div className={styles.hero}>
        <p style={{ color: "#fff", marginBottom: "0.3rem" }}>Welcome</p>
        <h2 style={{ color: "#fff" }}>
          Fill the form
          <br />
          to get
          <br />
          started.
        </h2>
      </div>
      <div className={styles.input_container}>
        <input type="email" ref={emailRef} placeholder="Enter Email" required />
        <input type="password" ref={passRef} placeholder="Password" required />
        <button onClick={handleSubmit} className={styles.btn}>
          Go &nbsp; <IoIosArrowDropright style={{ fontWeight: "650" }} />
        </button>
      </div>
    </>
  );
};

export default LoginPage;
