import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";

import Icon from "@/components/Icon";
import Tab from "@/components/Tab";

import GeneralDetails from "./GeneralDetails";

import { TabHeaderType } from "@/types/type";
import { userSlice } from "@/state_manager/selectors";
import { listAllUsersThunk, updateUserStatusThunk } from "@/thunks/user";

import styles from "./user-details.module.scss";

const UserDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatch<any>>();
  const { user } = useSelector(userSlice);

  const handleBackToDashboard = (userId: string, userStatus: string) => {
    dispatch(updateUserStatusThunk({ id: userId, status: userStatus }));
    navigate("/home");
  };

  const handleUpdateUserStatus = (userId: string, userStatus: string) => {
    dispatch(updateUserStatusThunk({ id: userId, status: userStatus }));
    dispatch(listAllUsersThunk());
  };

  const handleActiveTab = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const TabList: Record<TabHeaderType, JSX.Element> = {
    "General Details": <GeneralDetails user={user} />,
    Documents: <p>Add a new document</p>,
    Loans: <p>This is the loan tab</p>,
  };

  const tabContent = Object.values(TabList);

  return (
    <div className={styles["user-details__wrapper"]}>
      <button
        className={styles["user-details__button"]}
        onClick={() => handleBackToDashboard(user?.id!, user?.status!)}
      >
        <Icon icon="arrowLeft" />
        Back to Users
      </button>

      <div className={styles["user-details__heading-container"]}>
        <h2 className={styles["user-details__heading"]}>User Details</h2>
        <div className={styles["user-details__heading-button-container"]}>
          <button
            className={styles["user-details__heading-button--blacklist"]}
            onClick={() => handleUpdateUserStatus(user?.id!, "Inactive")}
          >
            Blacklist User
          </button>
          <button
            className={styles["user-details__heading-button--activate"]}
            onClick={() => handleUpdateUserStatus(user?.id!, "Active")}
          >
            Activate User
          </button>
        </div>
      </div>

      <div className={styles["user-details__preview-wrapper"]}>
        <div className={styles["user-details__preview-content-container"]}>
          <div className={styles["user-details__preview-image-container"]}>
            <div className={styles["user-details__preview-image"]}>
              <Icon icon="user" />
            </div>
          </div>
          <div className={styles["user-details__preview-name-container"]}>
            <h2 className={styles["user-details__preview-name"]}>
              {user?.userName}
            </h2>
            <p className={styles["user-details__preview-name-id"]}>
              id: {user?.id}
            </p>
          </div>
          <div className={styles["user-details__preview-account-container"]}>
            <h2 className={styles["user-details__preview-account-balance"]}>
              ${user?.accountBalance}
            </h2>
            <p className={styles["user-details__preview-account-bank"]}>
              Bank: {user?.bank}
            </p>
          </div>
        </div>
        <div className={styles["user-details__preview-tab-container"]}>
          <Tab
            tabList={TabList}
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
          />
        </div>
      </div>

      <div className={styles["user-details__info-wrapper"]}>
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default UserDetails;
