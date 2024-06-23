import React from "react";

import styles from "./page.module.scss";

const Page: React.FC = () => {
  return (
    <div className={styles["page"]}>
      <h1>Hello World, this is the client facing side of the task manager</h1>
    </div>
  );
};

export default Page;
