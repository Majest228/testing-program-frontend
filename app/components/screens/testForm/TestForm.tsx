import React, { useState } from "react";
import Info from "./info/Test.info";
import styles from "./TestForm.module.scss";
import Quest from "./quest/Test.quest";
import Picker from "./picker/Test.picker";
import { useQuery } from "react-query";
import { TestsService } from "@/app/services/tests.service";
import { useRouter } from "next/router";
import { useAppSelector } from "@/app/store/store";
import { saveToStorage, useAppDispatch } from "@/app/hooks/hooks";
import { setCurrentQuestion } from "@/app/store/test/test.slice";
const TestForm = () => {
  const { currentQuestion } = useAppSelector(state => state.test)
  const dispatch = useAppDispatch()
  const router = useRouter();

  const pathId = router.query.id;
  const {
    data: response,
    error,
    isLoading,
  } = useQuery("test by id", () => TestsService.getById(Number(pathId)));

  const test = isLoading
    ? null
    : response?.data.replace(/\r/g, "").split("\n").slice(0, -1);
  const testing = new Object();
  let id = 1;
  if (!isLoading)
    for (let i = 0; i < test.length; i++) {
      if ((i + 1) % 4 == 0) {
        testing[id] = [test[i - 3], test[i - 2], test[i - 1], test[i]];
        id++;
      }
    }

  console.log("test", test)
  console.log("Length", Object.keys(testing).length)
  // const prev = () => {
  //   const isFirstIndex = currentIndex === 1
  //   isFirstIndex ? currentIndex - 1 : response?.data.length - 1

  // }

  const prev = () => {
    const isFirstIndex = currentQuestion == 1
    isFirstIndex ? dispatch(setCurrentQuestion(Object.keys(testing).length)) : dispatch(setCurrentQuestion(currentQuestion - 1))
  }

  const next = () => {
    const isLastIndex = currentQuestion == Object.keys(testing).length
    isLastIndex ? dispatch(setCurrentQuestion(1)) : dispatch(setCurrentQuestion(currentQuestion + 1))


  }
  return (
    <div className={styles.TestForm}>
      <div className={styles.TestForm__container}>
        <div className={styles.TestForm__content}>
          <Info />
          <Quest testing={testing} id={currentQuestion} isLoading={isLoading} prev={prev} next={next} />
          <Picker testing={testing} />
        </div>
      </div>
    </div>
  );
};

export default TestForm;
