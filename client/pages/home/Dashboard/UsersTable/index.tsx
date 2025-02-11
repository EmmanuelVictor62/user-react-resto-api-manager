import React, { useState } from "react";

import Icon from "@/components/Icon";

import { userType } from "@/types/type";

import styles from "./users-table.module.scss";

interface UsersTableProps {
  user: userType;
  handleNavigateToUserDetails: () => void;
  handleDropdownToggle?: () => void;
}
interface UsersTableCardDropdown {
  handleItemClick: () => void;
}

export const DropdownComponent: React.FC<UsersTableCardDropdown> = ({
  handleItemClick,
}) => {
  return (
    <ul className={styles["user-table__dropdown"]}>
      <li
        className={styles["user-table__dropdown-item"]}
        onClick={() => handleItemClick()}
      >
        <Icon icon="eye" />
        <p className={styles["user-table__dropdown-item-name"]}>View Details</p>
      </li>
      <li className={styles["user-table__dropdown-item"]}>
        <Icon icon="blacklistUser" />
        <p className={styles["user-table__dropdown-item-name"]}>
          Blacklist User
        </p>
      </li>
      <li className={styles["user-table__dropdown-item"]}>
        <Icon icon="activateUser" />
        <p className={styles["user-table__dropdown-item-name"]}>
          Activate User
        </p>
      </li>
    </ul>
  );
};

const UsersTable: React.FC<UsersTableProps> = ({
  user,
  handleNavigateToUserDetails,
}) => {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

  const handleDropdownToggle = () => {
    setToggleDropdown(!toggleDropdown);
  };

  return (
    <li className={styles["user-table__card"]}>
      <p className={styles["user-table__card-organization"]}>
        {user?.organization}
      </p>
      <p className={styles["user-table__card-username"]}>{user?.userName}</p>
      <p className={styles["user-table__card-email"]}>{user?.officeEmail}</p>
      <p className={styles["user-table__card-phone-no"]}>{user?.phoneNumber}</p>
      <p className={styles["user-table__card-date-joined"]}>
        {user?.dateJoined}
      </p>

      <div
        className={styles["user-table__card-status"]}
        data-status={user?.status}
      >
        {user?.status}
      </div>

      <div className={styles["user-table__dropdown-container"]}>
        <button
          className={styles["user-table__dropdown-icon"]}
          onClick={() => handleDropdownToggle()}
        >
          <Icon icon="ellipse" />
        </button>

        {toggleDropdown ? (
          <DropdownComponent
            handleItemClick={() => handleNavigateToUserDetails()}
          />
        ) : null}
      </div>
    </li>
  );
};

export default UsersTable;
