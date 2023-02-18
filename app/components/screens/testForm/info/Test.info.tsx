import React from "react";
import styles from "../TestForm.module.scss";
import Image from "next/image";
import Stas from "../../../../assets/OdUHsYxnIEQ.jpg";

const Info = () => {
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
            <div
              className={
                styles.TestForm__content__top__left__content__text__discipline
              }
            >
              <p>Дисциплина: Матан</p>
            </div>
            <div
              className={
                styles.TestForm__content__top__left__content__text__time
              }
            >
              <p>Время тестирования: 60 мин.</p>
            </div>
            <div
              className={
                styles.TestForm__content__top__left__content__text__form
              }
            >
              <p>Вид контроля: экз</p>
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
              00:57:32
            </div>
          </div>
          <div className={styles.TestForm__content__top__right__result}>
            <p>Вы ответили на 3 из 30 вопросов</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
