import React, { useState } from "react";

import { useField } from "formik";

import styles from "./input.module.scss";

type InputType = "text" | "password" | "number" | "email";
type InputVariant = "small" | "medium" | "large";

interface InputProps {
  icon?: string;
  type: InputType;
  placeholder?: string;
  label?: string;
  name: string;
  required?: boolean;
  inputVariant?: InputVariant;
  success?: string;
}

const Input: React.FC<InputProps> = (props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [field, meta] = useField(props);

  const inputType =
    props.type !== "password" ? props.type : showPassword ? "text" : "password";
  const showToggleButton = props.type == "password";

  const isError = Boolean(meta.touched) && Boolean(meta.error);
  const isSuccess = Boolean(field.value) && Boolean(!meta.error);

  const handleTogglePasswordField = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles["input__wrapper"]}>
      {props.label && (
        <div className={styles["input__label-container"]}>
          {props.label && <label htmlFor="{name}">{props.label}</label>}
          {props.required && (
            <span className={styles["input__label-required"]}>*</span>
          )}
        </div>
      )}

      <div
        className={styles["input__container"]}
        data-success={isSuccess}
        data-error={isError}
        data-focused={isFocused}
        onFocus={() => setIsFocused(true)}
      >
        <input
          type={inputType}
          placeholder={props.placeholder}
          name={props.name}
          onChange={field.onChange}
          value={field.value as string}
          className={styles["input"]}
          data-variant={props.inputVariant}
          onBlur={() => setIsFocused(true)}
        />

        {showToggleButton && (
          <button
            className={styles["input__toggle-button"]}
            onClick={handleTogglePasswordField}
          >
            {showPassword ? "HIDE" : "SHOW"}
          </button>
        )}
      </div>

      {isError && (
        <p className={styles["input__error-message"]}>{meta.error}</p>
      )}
      {isSuccess && (
        <p className={styles["input__sucess-message"]}>{props.success} </p>
      )}
    </div>
  );
};

export default Input;
