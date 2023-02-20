import React, { useEffect, useState, useLayoutEffect } from "react";
import Info from "./info/Test.info";
import styles from "./TestForm.module.scss";
import Quest from "./quest/Test.quest";
import Picker from "./picker/Test.picker";
import { useQuery } from "react-query";
import { TestsService } from "@/app/services/tests.service";
import { useRouter } from "next/router";
import { useAppSelector } from "@/app/store/store";
import cookie from "js-cookie";
import { saveToStorage, useAppDispatch } from "@/app/hooks/hooks";
import {
  setCurrentQuestion,
  setTesting,
  setSelected,
} from "@/app/store/test/test.slice";
const TestForm = () => {
  const { currentQuestion } = useAppSelector((state) => state.test);
  const { testing } = useAppSelector((state) => state.test);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const pathId = router.query.id;
  const {
    data: response,
    error,
    isLoading,
  } = useQuery("test by id", () => TestsService.getById(Number(pathId)));

  const test = isLoading ? null : response?.data.replace(/\r/g, "").split("\n");
  let id = 1;
  useEffect(() => {
    if (!isLoading && !cookie.get("testing")) {
      const testing = new Object();
      for (let i = 0; i < test.length; i++) {
        if ((i + 1) % 4 == 0) {
          testing[id] = [test[i - 3], test[i - 2], test[i - 1], test[i]];
          id++;
        }
      }
      for (let i = 1; i < id; i++) {
        let j = Math.floor(Math.random() * i + 1);
        let tmp = testing[j];
        testing[j] = testing[i];
        testing[i] = tmp;
      }
      const selected = new Object();
      for (let i = 1; i < id; i++) {
        selected[i] = [testing[i][1], ""];
      }
      dispatch(setSelected(selected));
      dispatch(setTesting(testing));
    }
  }, [isLoading]);
  console.log(testing);

  // for (int i = otvety.Length - 1; i >= 1; i--)
  // {
  //     int j = rand.Next(i + 1);

  //     string tmp = otvety[j];
  //     otvety[j] = otvety[i];
  //     otvety[i] = tmp;
  // }
  // console.log("test", test);
  // console.log("Length", Object.keys(testing).length);
  // const prev = () => {
  //   const isFirstIndex = currentIndex === 1
  //   isFirstIndex ? currentIndex - 1 : response?.data.length - 1

  // }

  const prev = () => {
    const isFirstIndex = currentQuestion == 1;
    isFirstIndex
      ? dispatch(setCurrentQuestion(Object.keys(testing).length))
      : dispatch(setCurrentQuestion(currentQuestion - 1));
  };

  const next = () => {
    const isLastIndex = currentQuestion == Object.keys(testing).length;
    isLastIndex
      ? dispatch(setCurrentQuestion(1))
      : dispatch(setCurrentQuestion(+currentQuestion + 1));
  };
  return (
    <div className={styles.TestForm}>
      <div className={styles.TestForm__container}>
        <div className={styles.TestForm__content}>
          <Info />
          <Quest
            id={currentQuestion}
            isLoading={isLoading}
            prev={prev}
            next={next}
          />
          <Picker isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default TestForm;
