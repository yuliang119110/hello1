import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbRoundedBorder4: "rounded-radius4",
  icbCircleBorder10: "rounded-radius10",
  icbCircleBorder37: "rounded-radius37",
  CustomBorderBL15:
    "rounded-bl-[15px] rounded-br-[0] rounded-tl-[0] rounded-tr-[15px]",
  RoundedBorder4: "rounded-radius4",
};
const variants = {
  icbOutlineDeeppurple600:
    "bg-deep_purple_600 border border-deep_purple_600 border-solid",
  icbFillIndigoA200: "bg-indigo_A200",
  icbGradientPink600Pink300: "bg-gradient ",
  icbFillLightblue800: "bg-light_blue_800",
  icbOutlineGray200: "bg-gray_50 border border-gray_200 border-solid",
  icbOutline: "bg-gradient1 ",
  Outline: "bg-gradient1  text-white_A700",
  OutlineGray200:
    "bg-gray_50 border border-gray_200 border-solid text-gray_902",
  OutlinePurpleA200:
    "bg-purple_A200_0c border border-purple_A200 border-solid text-white_A700",
};
const sizes = {
  smIcn: "p-[3px]",
  mdIcn: "3xl:p-[10px] lg:p-[6px] xl:p-[7px] p-[8px]",
  lgIcn: "xl:p-[10px] p-[11px] 3xl:p-[14px] lg:p-[8px]",
  sm: "3xl:p-[10px] lg:p-[6px] xl:p-[7px] p-[8px]",
  md: "lg:p-[13px] xl:p-[16px] p-[17px] 2xl:p-[18px] 3xl:p-[22px]",
  lg: "lg:p-[15px] xl:p-[19px] p-[20px] 2xl:p-[21px] 3xl:p-[25px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbRoundedBorder4",
    "icbCircleBorder10",
    "icbCircleBorder37",
    "CustomBorderBL15",
    "RoundedBorder4",
  ]),
  variant: PropTypes.oneOf([
    "icbOutlineDeeppurple600",
    "icbFillIndigoA200",
    "icbGradientPink600Pink300",
    "icbFillLightblue800",
    "icbOutlineGray200",
    "icbOutline",
    "Outline",
    "OutlineGray200",
    "OutlinePurpleA200",
  ]),
  size: PropTypes.oneOf(["smIcn", "mdIcn", "lgIcn", "sm", "md", "lg"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "Outline",
  size: "md",
};

export { Button };
