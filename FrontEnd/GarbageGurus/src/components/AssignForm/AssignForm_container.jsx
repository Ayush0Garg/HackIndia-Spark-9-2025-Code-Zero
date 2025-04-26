//importing styles
import styles from "./AssignForm_container.module.css";

//importing Hooks
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";

//importing icons
import { IoIosArrowDropright } from "react-icons/io";

//Main Component
const AssignForm_container = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const wasteIdref = useRef();
  const workerIdref = useRef();
  const workerNameref = useRef();

  //Handling Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];

    fetch("http://192.168.43.93:8080/wastify/assign", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        workerId: workerIdref.current.value,
        wasteReportId: wasteIdref.current.value,
        date: formattedDate,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => navigate("/complaints"));
  };

  return (
    <div className={styles.main_container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_div}>
          <span>Waste Id</span>
          <br />
          <input ref={wasteIdref} type="number" value={id} blocked required />
        </div>
        <div className={styles.form_div}>
          <span>Worker Id</span>
          <br />
          <input ref={workerIdref} type="number" required />
        </div>
        <div className={styles.form_div}>
          <span>Worker Name</span>
          <br />
          <input ref={workerNameref} type="text" required />
        </div>
        <button className={styles.submit_btn}>
          Assign <IoIosArrowDropright />
        </button>
      </form>
    </div>
  );
};

export default AssignForm_container;
