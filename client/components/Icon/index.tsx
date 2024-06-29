import React from "react";

import { IconNames } from "@/types/icons";
import { icons } from "@/public/assests/icons/icon";

import styles from "./icon.module.scss";

interface IconProps {
  icon: IconNames;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  return (
    <span
      className={styles["icon"]}
      aria-hidden={true}
      data-icon="true"
      dangerouslySetInnerHTML={{ __html: icons[icon] }}
    />
  );
};

export default Icon;
