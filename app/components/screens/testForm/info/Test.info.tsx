import React, { useState, useEffect } from "react";
import styles from "../TestForm.module.scss";
import Image from "next/image";
import Stas from "../../../../assets/OdUHsYxnIEQ.jpg";
import Timer from "../timer/Timer";
import { useAppDispatch } from "@/app/hooks/hooks";
import { useAppSelector } from "@/app/store/store";
import cookie from "js-cookie";

const Info = ({ onSubmit }) => {
  const len = localStorage.getItem("questionsLength");
  const selected = JSON.parse(localStorage.getItem("selected"))
    ? JSON.parse(localStorage.getItem("selected"))
    : "";
  const arr = Object.values(selected);
  let picked = 0;
  arr.forEach((item) => (item ? picked++ : 0));
  return (
    <div className={styles.TestForm__content__top}>
      <div className={styles.TestForm__content__top__left}>
        <div className={styles.TestForm__content__top__left__content}>
          <div className={styles.TestForm__content__top__left__content__img}>
            <Image src={Stas} width={200} height={200} alt="" />
          </div>
          <div className={styles.TestForm__content__top__left__content__text}>
            <div
              className={
                styles.TestForm__content__top__left__content__text__name
              }
            >
              <p>Родиченко Станислав Валерьевич</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.TestForm__content__top__right}>
        <div className={styles.TestForm__content__top__right}>
          <div className={styles.TestForm__content__top__right__time}>
            <div className={styles.TestForm__content__top__right__time__title}>
              <p>До завершения осталось</p>
            </div>
            <div className={styles.TestForm__content__top__right__time__value}>
              <Timer onSubmit={onSubmit} />
            </div>
          </div>
          <div className={styles.TestForm__content__top__right__result}>
            <p>
              Вы ответили на {picked} из {len} вопросов
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
