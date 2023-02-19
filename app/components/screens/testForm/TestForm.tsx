import React from "react";
import Info from "./info/Test.info";
import styles from "./TestForm.module.scss";
import Quest from "./quest/Test.quest";
import Picker from "./picker/Test.picker";
import { useQuery } from "react-query";
import { TestsService } from "@/app/services/tests.service";
import { useRouter } from "next/router";
const TestForm = () => {
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
  return (
    <div className={styles.TestForm}>
      <div className={styles.TestForm__container}>
        <div className={styles.TestForm__content}>
          <Info />
          <Quest testing={testing} id={1} />
          <Picker />
        </div>
      </div>
    </div>
  );
};

export default TestForm;
