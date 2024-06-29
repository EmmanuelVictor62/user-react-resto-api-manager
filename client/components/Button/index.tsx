import React from "react";

import styles from "./button.module.scss";

interface ButtonProps {
  name: string;
  type?: "button" | "submit";
  label: string;
  variant?: "primary" | "secondary";
  buttonStyle?: React.CSSProperties;
  handleClickEvent?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  name,
  type,
  label,
  variant,
  buttonStyle,
  handleClickEvent,
}) => {
  return (
    <button
      className={styles["button"]}
      name={name}
      data-variant={variant}
      type={type}
      style={buttonStyle}
      onClick={handleClickEvent}
    >
      {label}
    </button>
  );
};

export default Button;
