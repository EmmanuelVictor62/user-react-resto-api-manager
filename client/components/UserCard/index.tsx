import React from "react";

import Icon from "@/components/Icon";
import { IconNames } from "@/types/icons";

import styles from "./user-card.module.scss";

interface UserCardProps {
  iconName: string;
  cardName: string;
  cardNumber: string;
  iconBackground?: string;
}

const UserCard: React.FC<UserCardProps> = ({
  iconName,
  cardName,
  cardNumber,
  iconBackground,
}) => {
  return (
    <div className={styles["user-card"]}>
      <div
        className={styles["user-card__icon"]}
        style={{ backgroundColor: iconBackground }}
      >
        <Icon icon={iconName as IconNames} />
      </div>
      <p className={styles["user-card__name"]}>{cardName} </p>
      <p className={styles["user-card__number"]}>{cardNumber} </p>
    </div>
  );
};

export default UserCard;
