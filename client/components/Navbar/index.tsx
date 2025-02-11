import React, { useState } from "react";
import Image from "next/image";

import Icon from "@/components/Icon";
import userImage from "@/public/assests/images/userImage.png";

import styles from "./navbar.module.scss";

interface NavbarProps {
  userName?: string;
}

const Navbar: React.FC<NavbarProps> = ({ userName }) => {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

  return (
    <header className={styles["navbar"]}>
      <div className={styles["navbar__logo-container"]}>
        <Icon icon="appLogo" />
      </div>
      <div className={styles["navbar__input-container"]}>
        <input
          type="text"
          placeholder="Search for anything"
          className={styles["navbar__input"]}
        />
        <div className={styles["navbar__input-search-icon-container"]}>
          <Icon icon="search" />
        </div>
      </div>
      <div className={styles["navbar__right-container"]}>
        <div className={styles["navbar__right-bell-icon"]}>
          <Icon icon="bell" />
        </div>

        <div className={styles["navbar__user-image"]}>
          <Image src={userImage} alt="userImage" />
        </div>

        <div
          className={styles["navbar__user-name-container"]}
          onClick={() => setToggleDropdown(!toggleDropdown)}
        >
          <p className={styles["navbar__user-name"]}>{userName}</p>
          <Icon icon="caretDown" />

          {toggleDropdown ? (
            <ul className={styles["navbar__user-name-dropdown"]}>
              <li className={styles["navbar__user-name-dropdown-item"]}>
                Logout
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
