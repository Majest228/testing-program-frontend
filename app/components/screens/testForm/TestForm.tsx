import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
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
import apiAxios from "@/app/api/api";
const TestForm = () => {
  const [res, setRes] = useState(0);
  const { currentQuestion } = useAppSelector((state) => state.test);
  const { testing, selected } = useAppSelector((state) => state.test);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const refValue = useRef(null);
  const refForm = useRef("");
  const pathId = router.query.id;


  const {
    data: response,
    error,
    isLoading,
  } = useQuery("test right", () => TestsService.getByTestId(Number(pathId)));
  // const test = isLoading ? null : response?.data.replace(/\r/g, "").split("\n");
  const questionsLength = localStorage.getItem("questionsLength");
  console.log('answer', isLoading ? [] : response?.data)
  console.log("selected", selected)

  let rightAnswer = isLoading ? [] : response?.data.filter(item => Object.values(selected).includes(item.variant))
  console.log("right", rightAnswer.length)
  const prev = () => {
    const isFirstIndex = currentQuestion == 1;
    isFirstIndex
      ? dispatch(setCurrentQuestion(+questionsLength))
      : dispatch(setCurrentQuestion(currentQuestion - 1));
  };
  const next = () => {
    const isLastIndex = currentQuestion == +questionsLength;
    isLastIndex
      ? dispatch(setCurrentQuestion(1))
      : dispatch(setCurrentQuestion(+currentQuestion + 1));
  };

  const onSubmit = async () => {
    let result = 0;
    for (let i = 1; i < Object.keys(selected).length; i++) {
      result += selected[i][0] == selected[i][1] ? 1 : 0;
    }
    await apiAxios.post(
      "test-res",
      { res: rightAnswer.length, testId: pathId },
      {
        headers: {
          Authorization: `Bearer ${cookie.get("accessToken")}`,
        },
      }
    );
  };

  return (
    <form
      className={styles.TestForm}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={styles.TestForm__container}>
        <div className={styles.TestForm__content}>
          <Info />
          <Quest
            refValue={refValue}
            id={currentQuestion}
            prev={prev}
            next={next}
          />
          <Picker onSubmit={onSubmit} />
        </div>
      </div>
    </form>
  );
};

export default TestForm;
