import React from "react";
import styles from "../TestForm.module.scss";

const Picker = () => {
  return (
    <div className={styles.TestForm__content}>
      <div className={styles.TestForm__content__bottom}>
        <div className={styles.TestForm__content__bottom__left}>
          <div className={styles.TestForm__content__bottom__left__item}>
            <p>1</p>
          </div>
          <div className={styles.TestForm__content__bottom__left__item}>
            <p>2</p>
          </div>
          <div className={styles.TestForm__content__bottom__left__item}>
            <p>3</p>
          </div>
          <div className={styles.TestForm__content__bottom__left__item}>
            <p>4</p>
          </div>
          <div className={styles.TestForm__content__bottom__left__item}>
            <p>5</p>
          </div>
        </div>
        <div className={styles.TestForm__content__bottom__right}>
          <button className={styles.TestForm__content__bottom__right__finish}>
            Завершить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Picker;
