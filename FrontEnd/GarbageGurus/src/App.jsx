//importing components
import SideBar from "./components/SideBar/SideBar";
import WasteReportContainer from "./components/WasteReportContainer/WasteReportContainer";
import Homepage from "./Pages/HomePage/Homepage";
//importing styles
import styles from "./App.module.css";
//importing Hook
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, authSliceActions } from "./store/Slices/AuthSlice/authSlice";

function App() {
  //calling Hooks
  const dispatch = useDispatch();
  const { user, loading } = useSelector((store) => store.auth);
  // console.log(user);
  const navigate = useNavigate();
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       dispatch(authSliceActions.set_user(user.uid));
  //     } else {
  //       dispatch(authSliceActions.clear_user());
  //     }
  //   });
  // }, []);

  useEffect(() => {
    if (!user) {
      navigate("/auth/log-in");
    }
  }, [user]);


  // if (loading) {
  //   return <h1>Checking Auth.........</h1>;
  // }
  return (
    <>
    <div className={styles.main_container}>
       <SideBar />
       <div className={styles.secondary_container}>
      <Outlet />
       </div>
    </div>
      
    </>
  );
}

export default App;
