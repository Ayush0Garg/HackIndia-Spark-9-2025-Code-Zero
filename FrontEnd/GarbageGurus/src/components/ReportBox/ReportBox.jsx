import styles from "./ReportBox.module.css";





const ReportBox = ({stat_data, icon, bgColor, iconColor}) =>{
    
    return (
    
        <div className={styles.main_container} style = {{backgroundColor:bgColor}}>
            <div className={styles.icon_container} style = {{backgroundColor:iconColor}}>{icon}</div>
            <div className={styles.data_container}>
                <p className={styles.attribute}>{stat_data[0]}</p>
                <p className={styles.value}>{stat_data[1]}</p>
            </div>
        </div>
        
    )
}

export default ReportBox;