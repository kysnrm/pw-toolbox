import { css } from "@/styled-system/css";

type ButtonProps = {
  label: string;
};

export const Button = ({ label }: ButtonProps) => {
  return <button className={css({ fontWeight: "bold" })}>{label}</button>;
};
