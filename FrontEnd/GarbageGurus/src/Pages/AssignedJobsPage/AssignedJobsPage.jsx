//importing styles
import styles from "./AssignedJobsPage.module.css";

//importing components
import AssignedBox from "../../components/AssignedBox/AssignedBox";
import MenuBar from "../../components/MenuBar/MenuBar";
import { assignedJobSliceActions } from "../../store/Slices/AssignedJobSlice/AssignedJobSlice";

//importing Hooks
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const AssignedJobsPage = () => {
  const { user } = useSelector((store) => store.auth);
  const assigned_jobs_data = useSelector((store) => store.assigned_job);
  console.log(assigned_jobs_data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      fetch("http://192.168.43.93:8080/wastify/get/assign")
        .then((response) => response.json())
        .then((data) => dispatch(assignedJobSliceActions.add_data(data)))
        .catch((error) => console.error("Error:", error));
    }
  }, []);
  return (
    <div className={styles.main_container}>
      <div className={styles.menu_bar}>
        <span className={styles.menu_items}>Worker ID</span>
        <span style ={{marginRight:"3rem"}} className={styles.menu_items}>Waste Report ID</span>
        <span style ={{marginRight:"3rem"}} className={styles.menu_items}>Date</span>
      </div>
      <div className={styles.assigned_box_container}>
        {assigned_jobs_data.map((data)=>{
            return (<AssignedBox data = {data}  />)
        })}
      </div>
    </div>
  );
};

export default AssignedJobsPage;
