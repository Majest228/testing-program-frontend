import React from "react";
import styles from "../TestForm.module.scss";
import Arrow from "@/app/components/ui/svg/arrow";

const Quest = () => {
  return (
    <div className={styles.TestForm__content__middle}>
      <div className={styles.TestForm__content__middle__content}>
        <div className={styles.TestForm__content__middle__content__quest}>
          <div
            className={styles.TestForm__content__middle__content__quest__top}
          >
            <div
              className={
                styles.TestForm__content__middle__content__quest__top__arrow
              }
            >
              <div
                className={
                  styles.TestForm__content__middle__content__quest__top__arrow__left
                }
              >
                <Arrow />
              </div>
              <div
                className={
                  styles.TestForm__content__middle__content__quest__top__arrow__count
                }
              >
                <p>Вопрос номер №3</p>
              </div>
              <div
                className={
                  styles.TestForm__content__middle__content__quest__top__arrow__right
                }
              >
                <Arrow />
              </div>
            </div>
            <div
              className={
                styles.TestForm__content__middle__content__quest__top__title
              }
            >
              <p>Стас гений этого мира, особенно в геншине?</p>
            </div>
          </div>
        </div>
        <div className={styles.TestForm__content__middle__content__questions}>
          <div
            className={
              styles.TestForm__content__middle__content__questions__radios
            }
          >
            <div
              className={
                styles.TestForm__content__middle__content__questions__radios__button
              }
            >
              <label>
                <input id={"0"} type={"radio"} name="answer" defaultChecked />
                <span
                  className={
                    styles.TestForm__content__middle__content__questions__radios__button__input
                  }
                ></span>
                <p>1</p>
              </label>
            </div>
            <div
              className={
                styles.TestForm__content__middle__content__questions__radios__button
              }
            >
              <label>
                <input id={"1"} type={"radio"} name="answer" defaultChecked />
                <span
                  className={
                    styles.TestForm__content__middle__content__questions__radios__button__input
                  }
                ></span>
                <p>2</p>
              </label>
            </div>
            <div
              className={
                styles.TestForm__content__middle__content__questions__radios__button
              }
            >
              <label>
                <input id={"2"} type={"radio"} name="answer" defaultChecked />
                <span
                  className={
                    styles.TestForm__content__middle__content__questions__radios__button__input
                  }
                ></span>
                <p>3</p>
              </label>
            </div>
            <div
              className={
                styles.TestForm__content__middle__content__questions__radios__button
              }
            >
              <label>
                <input id={"3"} type={"radio"} name="answer" defaultChecked />
                <span
                  className={
                    styles.TestForm__content__middle__content__questions__radios__button__input
                  }
                ></span>
                <p>4</p>
              </label>
            </div>
            <div
              className={
                styles.TestForm__content__middle__content__questions__radios__button
              }
            >
              <label>
                <input id={"4"} type={"radio"} name="answer" defaultChecked />
                <span
                  className={
                    styles.TestForm__content__middle__content__questions__radios__button__input
                  }
                ></span>
                <p>5</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quest;
