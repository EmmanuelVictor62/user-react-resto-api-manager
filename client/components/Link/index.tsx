import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import Icon from "../Icon";
import { IconNames } from "@/types/icons";

import styles from "./link.module.scss";

interface ActiveLinkProps {
  path: string;
  iconPath?: string;
  iconName?: string;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({
  path,
  iconPath,
  iconName,
}) => {
  const location = useLocation();
  const isActivePath = Boolean(location.pathname === path);

  return (
    <NavLink to={path}>
      <div
        className={`${styles["link"]} ${
          isActivePath ? styles["link__active"] : ""
        }`}
      >
        <Icon icon={iconPath as IconNames} />
        {iconName}
      </div>
    </NavLink>
  );
};

export default ActiveLink;
