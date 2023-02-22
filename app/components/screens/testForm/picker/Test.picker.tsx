import { useAppDispatch } from "@/app/hooks/hooks";
import { useAppSelector } from "@/app/store/store";
import { setCurrentQuestion } from "@/app/store/test/test.slice";
import React, { useState } from "react";
import styles from "../TestForm.module.scss";

const Picker = ({ isLoading, onSubmit }) => {
  const { currentQuestion } = useAppSelector((state) => state.test);
  const { testing, selected } = useAppSelector((state) => state.test);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.TestForm__content}>
      <div className={styles.TestForm__content__bottom}>
        <div className={styles.TestForm__content__bottom__left}>
          {!isLoading
            ? Object.keys(testing).map((test) => (
              <button
                className={styles.TestForm__content__bottom__left__item}
                onClick={() => dispatch(setCurrentQuestion(test))}
              >
                <p>{test}</p>
              </button>
            ))
            : ""}

        </div>
        <div className={styles.TestForm__content__bottom__right}>
          <button className={styles.TestForm__content__bottom__right__finish} onClick={onSubmit}>
            Завершить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Picker;
