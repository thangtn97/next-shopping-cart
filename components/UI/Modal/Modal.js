import { Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";

const modal = (props) => {
  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.closeModal} />
      <div className={styles.Modal} style={{ opacity: props.show ? "1" : "0" }}>
        {props.children}
      </div>
    </Fragment>
  );
};
export default modal;
