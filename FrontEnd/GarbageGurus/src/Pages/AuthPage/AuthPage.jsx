//importing  styles
import styles from "./AuthPage.module.css";

//importing components
import { NavLink, Outlet } from "react-router-dom";

//importing Image
import LeafImage from "../../../src/assets/leafs.jpg";

//importing fireBase essentials
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../store/Slices/AuthSlice/authSlice";
import { authSliceActions } from "../../store/Slices/AuthSlice/authSlice";

//importing Hooks
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Main Component
const AuthPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user,loading} = useSelector((store) => store.auth);
 useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(authSliceActions.set_user(user.uid));
      } else {
        dispatch(authSliceActions.clear_user());
      }
    });
  }, []);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    else{
      navigate("/auth/log-in");
    }
  }, [user]);

  if(loading){
    return <h1>CHecking Auth.......</h1>
  }
  return (
    <div className={styles.main_container}>
      <div className={styles.background_container}>
        <div className={styles.image_container}>
          <img className={styles.img} src={LeafImage} alt="" />
        </div>
        <div className={styles.login_info_contianer}>
          <div className={styles.navbar}>
            <NavLink
              to="/auth/sign-up"
              className={({ isActive }) => {
                return isActive
                  ? `${styles.nav_btns} ${styles.active_btns}`
                  : styles.nav_btns;
              }}
            >
              Sign up
            </NavLink>
            <NavLink
              to="/auth/log-in"
              className={({ isActive }) => {
                return isActive
                  ? `${styles.nav_btns} ${styles.active_btns}`
                  : styles.nav_btns;
              }}
            >
              Sign in
            </NavLink>
          </div>
          <div className={styles.hero_fields_div}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
