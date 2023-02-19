import React from "react";
import styles from "../TestForm.module.scss";
import Arrow from "@/app/components/ui/svg/arrow";

const Quest = ({ testing, id }: any) => {
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
                <p>Вопрос номер №{id}</p>
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
              <p>{testing[id][0]}</p>
            </div>
          </div>
        </div>
        <div className={styles.TestForm__content__middle__content__questions}>
          <div
            className={
              styles.TestForm__content__middle__content__questions__radios
            }
          >
            {testing[id].map((test, i) =>
              i != 0 ? (
                <div
                  className={
                    styles.TestForm__content__middle__content__questions__radios__button
                  }
                >
                  <label>
                    <input
                      id={"0"}
                      type={"radio"}
                      name="answer"
                      defaultChecked
                    />
                    <span
                      className={
                        styles.TestForm__content__middle__content__questions__radios__button__input
                      }
                    ></span>
                    <p>{test}</p>
                  </label>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quest;
