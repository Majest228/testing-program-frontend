import React from "react";
import Info from "./info/Test.info";
import styles from "./TestForm.module.scss";
import Quest from "./quest/Test.quest";
import Picker from "./picker/Test.picker";
import { useQuery } from 'react-query'
import { TestsService } from "@/app/services/tests.service";
import { useRouter } from "next/router";
const TestForm = () => {
  const router = useRouter()

  const pathId = router.query.id
  const { data: response, error, isLoading } = useQuery('test by id', () => TestsService.getById(Number(pathId)))

  console.log(isLoading ? null : response?.data.split("\n"))
  return (
    <div className={styles.TestForm}>
      <div className={styles.TestForm__container}>
        <div className={styles.TestForm__content}>
          <Info />
          <Quest />
          <Picker />
        </div>
      </div>
    </div>
  );
};

export default TestForm;
