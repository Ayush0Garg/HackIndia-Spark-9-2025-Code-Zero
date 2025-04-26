import styles from "./ComplaintsPage.module.css";

//importing components
import RequestBar from "../../components/RequestBar/RequestBar.jsx";
import MenuBar from "../../components/MenuBar/MenuBar.jsx";

//importing Hooks
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//importing from complaints slice
import { complaintsSliceActions } from "../../store/Slices/ComplaintsSlice/ComplaintsSlice.js";


const ComplaintsPage = () =>{

    const {user} = useSelector((store)=> store.auth);
    const complaints_data = useSelector((store) => store.complaints_data);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(user){
            fetch("http://192.168.43.93:8080/wastify/get/reports")
            .then((response) => response.json())
            .then((data) => dispatch(complaintsSliceActions.add_data(data)))
            .catch((error) => console.error("Error:", error));
        }
      
    },[])
    return(
        <div className={styles.main_container}>
            <MenuBar />
            <div className={styles.request_bar_container}>
               {complaints_data.map((complaint_data) => {
                const bgColor =(complaint_data.severity == "High" ? "#FBD6DC" : (complaint_data.severity == "Medium" ? "#FEECB5": "#D0EBC2") ) 
                return (<RequestBar key = {complaint_data.id} bgColor = {bgColor} complaint_data = {complaint_data}/>)
               })}
            </div>
        </div>
    )
}

export default ComplaintsPage;