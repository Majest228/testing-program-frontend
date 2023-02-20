import React from "react";
import styles from "../TestForm.module.scss";
import Arrow from "@/app/components/ui/svg/arrow";
import { useAppSelector } from "@/app/store/store";
import { useAppDispatch } from "@/app/hooks/hooks";
import { setSelectedId } from "@/app/store/test/test.slice";

const Quest = ({ id, isLoading, prev, next }: any) => {
  const { currentQuestion } = useAppSelector((state) => state.test);
  const { testing } = useAppSelector((state) => state.test);
  const dispatch = useAppDispatch();
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
              <button
                className={
                  styles.TestForm__content__middle__content__quest__top__arrow__left
                }
                onClick={() => prev()}
              >
                <Arrow />
              </button>
              <div
                className={
                  styles.TestForm__content__middle__content__quest__top__arrow__count
                }
              >
                <p>Вопрос номер №{id}</p>
              </div>
              <button
                className={
                  styles.TestForm__content__middle__content__quest__top__arrow__right
                }
                onClick={() => next()}
              >
                <Arrow />
              </button>
            </div>
            <div
              className={
                styles.TestForm__content__middle__content__quest__top__title
              }
            >
              <p>
                {isLoading
                  ? ""
                  : testing[currentQuestion]
                  ? testing[currentQuestion][0]
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.TestForm__content__middle__content__questions}>
          <div
            className={
              styles.TestForm__content__middle__content__questions__radios
            }
          >
            {isLoading
              ? ""
              : testing[currentQuestion]?.map((test, i) =>
                  i != 0 ? (
                    <div
                      key={i}
                      className={
                        styles.TestForm__content__middle__content__questions__radios__button
                      }
                    >
                      <label>
                        <input
                          id={String(currentQuestion)}
                          value={test}
                          type={"radio"}
                          name="answer"
                          onChange={(e) => {
                            dispatch(
                              setSelectedId({
                                id: e.target.id,
                                select: e.target.value,
                              })
                            );
                          }}
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
