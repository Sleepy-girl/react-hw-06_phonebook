import React from "react";
import styles from "./alertError.module.css";
import { CSSTransition } from "react-transition-group";

function AlertError() {
  return (
    // <CSSTransition classNames={styles} in={alert} timeout={250} unmountOnExit>
    // <CSSTransition classNames={styles} timeout={250} unmountOnExit>
    <div className={styles.alert}>
      <span className={styles.message}>Contact already exists!</span>
    </div>
    // </CSSTransition>
  );
}

export default AlertError;
