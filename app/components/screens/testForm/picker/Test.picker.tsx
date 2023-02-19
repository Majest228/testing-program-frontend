import { useAppDispatch } from "@/app/hooks/hooks";
import { useAppSelector } from "@/app/store/store";
import { setCurrentQuestion } from "@/app/store/test/test.slice";
import React from "react";
import styles from "../TestForm.module.scss";

const Picker = ({ testing }: any) => {
  const { currentQuestion } = useAppSelector(state => state.test)
  const dispatch = useAppDispatch()
  Object.keys(testing).forEach(item => console.log(item))

  console.log(testing)

  return (
    <div className={styles.TestForm__content}>
      <div className={styles.TestForm__content__bottom}>
        <div className={styles.TestForm__content__bottom__left}>
          {
            Object.keys(testing).map(test => (
              <button className={styles.TestForm__content__bottom__left__item} onClick={() => dispatch(setCurrentQuestion(test))}>
                <p>{test}</p>
              </button>
            ))
          }
          {/* <div className={styles.TestForm__content__bottom__left__item}>
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
          </div> */}
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
