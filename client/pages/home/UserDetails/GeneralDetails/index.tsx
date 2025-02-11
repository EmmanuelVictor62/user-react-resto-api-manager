import React from "react";

import styles from "./general-details.module.scss";
import { userType } from "@/types/type";

interface DetailsProps {
  user?: userType;
}

const GeneralDetails: React.FC<DetailsProps> = ({ user }) => {
  return (
    <div className={styles["general-details__container"]}>
      <p className={styles["general-details__heading"]}>Personal Information</p>
      <div className={styles["general-details__content-column"]}>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Full Name
          </p>
          <p className={styles["general-details__content"]}>
            {user?.userName ? user?.userName : "N/A"}{" "}
          </p>
        </div>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Phone Number
          </p>
          <p className={styles["general-details__content"]}>
            {user?.phoneNumber ? user?.phoneNumber : "N/A"}
          </p>
        </div>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Email Address
          </p>
          <p className={styles["general-details__content"]}>
            {user?.officeEmail ? user?.officeEmail : "N/A"}
          </p>
        </div>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>Gender</p>
          <p className={styles["general-details__content"]}>
            {user?.gender ? user?.gender : "N/A"}{" "}
          </p>
        </div>
      </div>

      <p className={styles["general-details__heading"]}>Education </p>
      <div className={styles["general-details__content-column"]}>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Level of Education
          </p>
          <p className={styles["general-details__content"]}>
            {user?.educationLevel ? user?.educationLevel : "N/A"}
          </p>
        </div>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Employment Status
          </p>
          <p className={styles["general-details__content"]}>
            {user?.employmentStatus ? user?.employmentStatus : "N/A"}{" "}
          </p>
        </div>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Sector Of Employment
          </p>
          <p className={styles["general-details__content"]}>
            {user?.employementSector ? user?.employementSector : "N/A"}{" "}
          </p>
        </div>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Office Email
          </p>
          <p className={styles["general-details__content"]}>
            {user?.officeEmail ? user?.officeEmail : "N/A"}
          </p>
        </div>
      </div>

      <p className={styles["general-details__heading"]}>Guarantor</p>
      <div className={styles["general-details__content-column"]}>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Full Name
          </p>
          <p className={styles["general-details__content"]}>
            {user?.guarantor ? user?.guarantor : "N/A"}{" "}
          </p>
        </div>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Phone Number
          </p>
          <p className={styles["general-details__content"]}>
            {user?.guarantorPhoneNo ? user?.guarantorPhoneNo : "N/A"}{" "}
          </p>
        </div>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Relationship
          </p>
          <p className={styles["general-details__content"]}>
            {user?.guarantorRelationship ? user?.guarantorRelationship : "N/A"}{" "}
          </p>
        </div>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>Gender</p>
          <p className={styles["general-details__content"]}>
            {user?.gender ? user?.gender : "N/A"}{" "}
          </p>
        </div>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Office Email
          </p>
          <p className={styles["general-details__content"]}>
            {user?.guarantorEmail ? user?.guarantorEmail : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralDetails;
