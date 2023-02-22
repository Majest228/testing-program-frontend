import React, { useEffect, useRef, useState } from "react";
import styles from "../TestForm.module.scss";
import Arrow from "@/app/components/ui/svg/arrow";
import { useAppSelector } from "@/app/store/store";
import { useAppDispatch } from "@/app/hooks/hooks";
import { setSelectedId } from "@/app/store/test/test.slice";
import { useQuery } from "react-query";
import { TestsService } from "@/app/services/tests.service";
import { useRouter } from "next/router";
import { json } from "stream/consumers";
import {
  setSelected,
  setCurrentQuestion,
  setQuestionsLength,
} from "@/app/store/test/test.slice";

const Quest = ({ id, prev, next }: any) => {
  const [checked, setChecked] = useState(false);

  const { currentQuestion } = useAppSelector((state) => state.test);
  const { testing, selected } = useAppSelector((state) => state.test);
  const dispatch = useAppDispatch();

  const router = useRouter();
  const pathId = router.query.id;
  const {
    data: response,
    error,
    isLoading,
  } = useQuery("test by id", () => TestsService.getByTestId(Number(pathId)));

  if (!isLoading && !localStorage.getItem("selected")) {
    let selecting = {};
    const questionsLength =
      response?.data.length / (response?.data[0].count - 1);
    if (!isLoading)
      for (let i = 1; i <= questionsLength; i++) selecting[i] = "";
    dispatch(setSelected(selecting));
    dispatch(setCurrentQuestion(1));
    localStorage.setItem("questionsLength", questionsLength.toString());
    localStorage.setItem("selected", JSON.stringify(selecting));
  }
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
              <p>{isLoading ? "" : response?.data[currentQuestion].question}</p>
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
              : response?.data
                  .filter((item) => item.questionId === currentQuestion)
                  .map((test, i) => (
                    <div
                      key={i}
                      className={
                        styles.TestForm__content__middle__content__questions__radios__button
                      }
                    >
                      <label>
                        <input
                          id={String(currentQuestion)}
                          value={test.variant}
                          type={"radio"}
                          name={`answer${currentQuestion}`}
                          checked={
                            checked || selected[currentQuestion] == test.variant
                          }
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
                        <p>{test.variant}</p>
                      </label>
                    </div>
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quest;
