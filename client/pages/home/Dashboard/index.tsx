import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";

import UsersTable from "./UsersTable";
import Icon from "@/components/Icon";

import { userSlice } from "@/state_manager/selectors";
import { getUserThunk } from "@/thunks/user";

import styles from "./dashboard.module.scss";
import { AllLoader } from "@/components/Loader";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch<Dispatch<any>>();
  const navigate = useNavigate();

  const { loading, users } = useSelector(userSlice);

  const handleNavigateToUserDetails = (userId: string) => {
    dispatch(getUserThunk(userId));
    navigate(`/home/users/details/:${userId}`);
  };

  return (
    <div className={styles["dashboard"]}>
      <div className={styles["dashboard__heading-container"]}>
        <h1 className={styles["dashboard__heading"]}>Users</h1>
        <button className={styles["dashboard__heading-button"]}>
          Add Users
        </button>
      </div>

      <div className={styles["dashboard__users-table-wrapper"]}>
        <div className={styles["dashboard__users-table"]}>
          <div className={styles["dashboard__users-table-heading-container"]}>
            <button className={styles["dashboard__users-table-heading"]}>
              Organization
              <Icon icon="filter" />
            </button>
            <button className={styles["dashboard__users-table-heading"]}>
              Username
              <Icon icon="filter" />
            </button>
            <button className={styles["dashboard__users-table-heading"]}>
              Email
              <Icon icon="filter" />
            </button>
            <button className={styles["dashboard__users-table-heading"]}>
              Phone Number
              <Icon icon="filter" />
            </button>
            <button className={styles["dashboard__users-table-heading"]}>
              Date Joined
              <Icon icon="filter" />
            </button>
            <button className={styles["dashboard__users-table-heading"]}>
              Status
              <Icon icon="filter" />
            </button>
          </div>
          <ul className={styles["dashboard__users-table-card-wrapper"]}>
            {loading ? (
              <div
                className={styles["dashboard__users-table-card-loader-wrapper"]}
              >
                <AllLoader />
              </div>
            ) : (
              users?.map((user, index) => {
                return (
                  <div key={index + 1}>
                    <UsersTable
                      user={user}
                      handleNavigateToUserDetails={() =>
                        handleNavigateToUserDetails(user.id!)
                      }
                    />
                  </div>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
