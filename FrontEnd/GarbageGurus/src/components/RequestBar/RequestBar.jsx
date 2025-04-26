//importing styles
import styles from "./RequestBar.module.css";


//importing Hooks
import { useNavigate } from "react-router-dom";
//importing icons
import { IoIosArrowDropright } from "react-icons/io";






//Main Component
const RequestBar = ({complaint_data, bgColor}) =>{
    
    const navigate  = useNavigate();

    const handlleAssignment = (wasteId) =>{
        navigate(`/assign/${wasteId}`);
    }


    return (
    <div className={styles.main_container} style = {{backgroundColor:bgColor}}>
        <div className={`${styles.request_data} ${styles.loc_container}`}>
            <img src={complaint_data.imageURL} alt="garbage_image" />
            <div className={styles.corordinates}>
                <span>{complaint_data.latitude}</span><br />
                <span>{complaint_data.longitude}</span>
            </div>
        </div>
        <span className={`${styles.severity} ${styles.request_data}`}>{complaint_data.severity}</span>
        <span className={styles.request_data}>{complaint_data.dateTime}</span>
        <span className={styles.request_data}>{complaint_data.wasteTypes}</span>
        <button onClick = {()=>{handlleAssignment(complaint_data.id)}} className={`${styles.assign_btn} ${styles.request_data}`}>Assign <IoIosArrowDropright /></button>
    </div>
    );
}

export default RequestBar;