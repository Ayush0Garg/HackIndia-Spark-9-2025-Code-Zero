//importing styles
import styles from "./WasteReportContainer.module.css";

//importing Hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//importing components
import ReportBox from "../ReportBox/ReportBox";

//importing from stats slice
import { statsSliceActions } from "../../store/Slices/StatsSlice/StatsSlice";

//importing icons
import { MdOutlineAssignmentInd } from "react-icons/md";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoTrashBinOutline } from "react-icons/io5";
import { GrUserWorker } from "react-icons/gr";

// const INITIAL_VALUES = [{totalRequests: 5}, {totalAssignment: 4}];

//Main Component
const WasteReportContainer = () => {
  const dispatch = useDispatch();
  const stats_data = useSelector((store) => store.stats);
  console.log(stats_data);
  useEffect(() => {
    fetch("http://192.168.43.93:8080/wastify/get/stats")
      .then((response) => response.json())
      .then((data) => dispatch(statsSliceActions.add_data(data)))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className={styles.main_container}>
      <h3>DASHBOARD</h3>
      <div className={styles.box_container}>
        {Object.entries(stats_data).map((stat_data, index) => {
          const bgcolor =
            index == 0
              ? "#FCD6B3"
              : index == 1
              ? "#FEECB5"
              : index == 2
              ? "#D4EFFD"
              : index == 3
              ? "#FBD6DC"
              : "#D0EBC2";
              const iconColor =
              index == 0
                ? "#FA9E43"
                : index == 1
                ? "#FEC214"
                : index == 2
                ? "#3CA4DE"
                : index == 3
                ? "#FC7975"
                : "#54C952";
    
          const icon =
            stat_data[0] === "Total Requests" ? (
              <VscGitPullRequestNewChanges />
            ) : stat_data[0] === "Total Assigned Jobs" ? (
              <MdOutlineAssignmentInd />
            ) : stat_data[0] === "Total Cleaned Volume" ? (
              <IoTrashBinOutline />
            ) : stat_data[0] === "Total Employees" ? (
              <GrUserWorker />
            ) : (
              <HiOutlineUsers />
            );
          return (
            <ReportBox stat_data={stat_data} icon={icon} bgColor={bgcolor} iconColor = {iconColor} />
          );
        })}
      </div>
    </div>
  );
};

export default WasteReportContainer;
