import styles from "./Layout.module.css";
import ToolBar from "../Navigation/ToolBar/ToolBar";
const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <ToolBar />
      <div className={styles.Body}>{children}</div>
      <style jsx>
        {`
          a {
            text-decoration: none;
            padding: 10px;
            margin: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
