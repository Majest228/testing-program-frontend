import { TestsService } from "@/app/services/tests.service";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const {
    isLoading,
    data: response,
    error,
  } = useQuery("tests list", () => TestsService.getAll());
  console.log(response);
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <div className={styles.home__content}>
          {isLoading ? (
            <div>Loading</div>
          ) : (
            <div className={styles.home__content__links}>
              {response?.data.map((item) => (
                <Link href={`/testing/${item.id}`}>
                  <div className={styles.home__content__links__link}>
                    <h3>{item.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
