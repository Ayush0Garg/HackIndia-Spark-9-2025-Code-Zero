import styles from "./MenuBar.module.css";

const MenuBar = () => {
  return (
    <div className={styles.menu_bar}>
      <span style={{ marginLeft: "0" }}>Location</span>
      <span style={{ marginRight: "4rem" }}>Severity</span>
      <span style={{ marginRight: "5rem" }}>Date</span>
      <span>Type</span>
      <span style={{ marginRight: "0" }}>Allocation</span>
    </div>
  );
};

export default MenuBar;