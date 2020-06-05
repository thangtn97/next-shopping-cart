import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./ToolBar.module.css";
const toolBar = () => {
  return (
    <div className={styles.ToolBar}>
      <div className={styles.Logo}>Logo</div>
      <nav className={styles.Nav}>
        <NavigationItems />
      </nav>
    </div>
  );
};
export default toolBar;
