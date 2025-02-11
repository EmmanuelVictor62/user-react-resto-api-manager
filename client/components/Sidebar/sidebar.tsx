import React from "react";

import ActiveLink from "@/components/Link";
import { sidebarRoutes } from "@/utils/routes";

import styles from "./sidebar.module.scss";

const Sidebar: React.FC = () => {
  return (
    <div className={styles["sidebar"]}>
      {sidebarRoutes?.map((element, index) => {
        return (
          <ul className={styles["sidebar__content-wrapper"]} key={index + 1}>
            {element.name && (
              <p className={styles["sidebar__content-header"]}>
                {element.name}
              </p>
            )}
            <ul className={styles["sidebar__content-children-wrapper"]}>
              {element.children?.map((children, index) => {
                return (
                  <li
                    className={styles["sidebar__content-children-link-wrapper"]}
                    key={index + 1}
                  >
                    <ActiveLink
                      path={children.path}
                      iconPath={children.icon}
                      iconName={children.name}
                    />
                  </li>
                );
              })}
            </ul>
          </ul>
        );
      })}
    </div>
  );
};

export default Sidebar;
