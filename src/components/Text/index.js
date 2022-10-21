import React from "react";
const variantClasses = {
  h1: "font-semibold lg:text-[49px] xl:text-[62px] text-[65px] 2xl:text-[70px] 3xl:text-[84px]",
  h2: "font-medium lg:text-[49px] xl:text-[61px] text-[64px] 2xl:text-[69px] 3xl:text-[83px]",
  h3: "font-bold lg:text-[46px] xl:text-[57px] text-[60px] 2xl:text-[64px] 3xl:text-[77px]",
  h4: "font-bold lg:text-[38px] xl:text-[48px] text-[50px] 2xl:text-[54px] 3xl:text-[64px]",
  h5: "font-bold lg:text-[35px] xl:text-[44px] text-[46.19px] 2xl:text-[49px] 3xl:text-[59px]",
  h6: "font-bold lg:text-[30px] xl:text-[38px] text-[40px] 2xl:text-[43px] 3xl:text-[51px]",
  body1:
    "font-bold lg:text-[27px] xl:text-[34px] text-[36px] 2xl:text-[38px] 3xl:text-[46px]",
  body2:
    "lg:text-[19px] xl:text-[24px] text-[25px] 2xl:text-[27px] 3xl:text-[32px]",
  body3:
    "lg:text-[18px] xl:text-[23px] text-[24px] 2xl:text-[25px] 3xl:text-[31px]",
  body4:
    "font-medium lg:text-[16px] xl:text-[21px] text-[22px] 2xl:text-[23px] 3xl:text-[28px]",
  body5:
    "lg:text-[15px] xl:text-[19px] text-[20px] 2xl:text-[21px] 3xl:text-[25px]",
  body6:
    "lg:text-[13px] xl:text-[17px] text-[18px] 2xl:text-[19px] 3xl:text-[23px]",
  body7:
    "font-medium lg:text-[13px] xl:text-[16px] text-[17px] 2xl:text-[18px] 3xl:text-[22px]",
  body8:
    "lg:text-[12px] xl:text-[15px] text-[16px] 2xl:text-[17px] 3xl:text-[20px]",
  body9:
    "font-normal lg:text-[10px] xl:text-[13px] text-[14px] 2xl:text-[15px] 3xl:text-[18px]",
  body10:
    "font-medium text-[100px] 2xl:text-[108px] 3xl:text-[129px] lg:text-[76px] xl:text-[96px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
