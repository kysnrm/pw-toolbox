import { css } from "@/styled-system/css";
import Link from "next/link";

type ButtonActions =
  | {
      href: string;
      onClick?: undefined;
    }
  | {
      href?: undefined;
      onClick?: () => void;
    };

type ButtonProps = ButtonActions & {
  label: string;
  appearance?: "filled" | "outline" | "text";
  type?: "primary" | "danger";
  size?: "sm" | "md";
  isLoading?: boolean;
  disabled?: boolean;
};

export const Button = ({
  label,
  appearance = "filled",
  type = "primary",
  size = "md",
  isLoading,
  disabled,
  href,
  onClick,
}: ButtonProps) => {
  const baseColor = type === "danger" ? "red.500" : "black";
  const bgColor = type === "danger" ? "red.100" : "neutral.200";
  const buttonStyle = css({
    paddingX: size === "sm" ? 3 : 4,
    height: size === "sm" ? 8 : 10,
    fontSize: size === "sm" ? "sm" : "md",
    backgroundColor: appearance === "filled" ? baseColor : "",
    borderColor: appearance === "text" ? "transparent" : baseColor,
    borderWidth: "1px",
    borderStyle: "solid",
    fontWeight: "bold",
    color: appearance === "filled" ? "white" : baseColor,
    transition: "all",
    transitionDuration: "0.15s",
    cursor: disabled ? "not-allowed" : isLoading ? "wait" : "pointer",
    opacity: disabled ? 0.5 : 1,
    _hover: {
      ...(!disabled &&
        !isLoading && {
          opacity: appearance === "filled" ? 0.6 : 1,
          backgroundColor: appearance !== "filled" ? bgColor : baseColor,
        }),
    },
  });

  if (href)
    return (
      <Link href={href} className={buttonStyle}>
        {label}
      </Link>
    );

  return (
    <button className={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};
