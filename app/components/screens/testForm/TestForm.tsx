import React from "react";
import Info from "./info/Test.info";
import styles from "./TestForm.module.scss";
import Quest from "./quest/Test.quest";
import Picker from "./picker/Test.picker";

const TestForm = () => {
  return (
    <div className={styles.TestForm}>
      <div className={styles.TestForm__container}>
        <div className={styles.TestForm__content}>
          <Info />
          <Quest />
          <Picker />
        </div>
      </div>
    </div>
  );
};

export default TestForm;
