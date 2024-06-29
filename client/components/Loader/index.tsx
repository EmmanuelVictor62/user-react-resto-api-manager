import React from "react";

import styles from "./loader.module.scss";

const Loader: React.FC = () => {
  return (
    <div className={styles["loader__container"]}>
      <div className={styles["loader__content-wrapper"]}>
        <div className={styles["loader__content"]}></div>
        <div className={styles["loader__content"]}></div>
        <div className={styles["loader__content"]}></div>
      </div>
    </div>
  );
};

export default Loader;

export const AllLoader = () => {
  return (
    <>
      {Array.from({ length: 10 })
        .map((_, i) => i + 1)
        .map((_, index) => {
          return <Loader key={index + 1} />;
        })}
    </>
  );
};
