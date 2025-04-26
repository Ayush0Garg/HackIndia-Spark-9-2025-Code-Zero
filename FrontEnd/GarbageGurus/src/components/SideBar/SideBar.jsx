//importing css
import styles from "./SideBar.module.css";

//importing icons
import { LuLeafyGreen } from "react-icons/lu";
import { RiHome4Line } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { PiGitPullRequestDuotone } from "react-icons/pi";
import { RiArticleFill } from "react-icons/ri";
import { MdAssignmentInd } from "react-icons/md";
//importing components
import { NavLink } from "react-router";


//importing Hook
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//importing authSlice  Actions
import { auth, authSliceActions } from "../../store/Slices/AuthSlice/authSlice";
//importing fireBase essentials
import { signOut } from "firebase/auth";

const SideBar = () =>{
    const dispatch = useDispatch();

    const handleLogout = () => {
        signOut(auth).then(()=>dispatch(authSliceActions.clear_user()) );
    }
    return(
        <>
        <div className = {styles.main_container}>
            <div className={styles.logo_container}>
                <LuLeafyGreen className= {styles.logo}/>
                <h1 className={styles.logo_heading}>GarbageGurus</h1>
            </div>
            <div className={styles.links_container}>
                <NavLink to ="/" className={({isActive}) =>{
                    return (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)
                }}>
                 <div className={styles.navLink_div}>
                    <RiHome4Line className={styles.navLogos}/>
                    <h5 className={styles.nav_headings}>Home</h5>
                 </div>
                </NavLink>
                <NavLink to ="/b" className={({isActive}) =>{
                    return (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)
                }}>
                 <div className={styles.navLink_div}>
                    <BsClockHistory  className={styles.navLogos}/>
                    <h5 className={styles.nav_headings}>History</h5>
                 </div>
                </NavLink>
                <NavLink to ="/complaints" className={({isActive}) =>{
                    return (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)
                }}>
                 <div className={styles.navLink_div}>
                    <PiGitPullRequestDuotone  className={styles.navLogos}/>
                    <h5 className={styles.nav_headings}>Complaints</h5>
                 </div>
                </NavLink>
                <NavLink to ="/d" className={({isActive}) =>{
                    return (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)
                }}>
                 <div className={styles.navLink_div}>
                    <RiArticleFill  className={styles.navLogos}/>
                    <h5 className={styles.nav_headings}>Articles</h5>
                 </div>
                </NavLink>
                <NavLink to ="/assigned-jobs" className={({isActive}) =>{
                    return (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)
                }}>
                 <div className={styles.navLink_div}>
                    <MdAssignmentInd  className={styles.navLogos}/>
                    <h5 className={styles.nav_headings}>Assigned Authorities</h5>
                 </div>
                </NavLink>
            </div>

            <div onClick = {handleLogout} className={styles.logout_container}>
                <MdOutlineLogout className={styles.logout_icon}/>
                <h6 className={styles.nav_headings} >Logout</h6>
            </div>
        </div>
        </>
    )

}

export default SideBar;