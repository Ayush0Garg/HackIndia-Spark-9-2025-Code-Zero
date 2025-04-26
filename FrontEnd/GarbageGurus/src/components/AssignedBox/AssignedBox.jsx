//importing styles
import styles from "./AssignedBox.module.css";


//Main Component
const AssignedBox = ({data}) => {
    return (
        <div className={styles.main_container} >
            <span className={styles.items}>{data.workerId}</span>
            <span className={styles.items}>{data.wasteReportId}</span>
            <span className={`${styles.items} ${styles.id_container}`}>{data.date}</span>
        </div>
    )
}

export default AssignedBox;