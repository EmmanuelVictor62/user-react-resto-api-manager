import React from "react";

import styles from "./tab.module.scss";

type TabType = Record<string, JSX.Element>;
interface TabProps {
  tabList: TabType;
  activeTab?: number;
  handleActiveTab: (tabIndex: number) => void;
}

const Tab: React.FC<TabProps> = ({ tabList, activeTab, handleActiveTab }) => {
  const tabHeaders = Object.keys(tabList);
  return (
    <div className={styles["tab__button-wrapper"]}>
      {tabHeaders.map((tab, index) => {
        return (
          <button
            className={styles["tab__button"]}
            key={index + 1}
            data-active={activeTab === index}
            onClick={() => handleActiveTab(index)}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default Tab;
