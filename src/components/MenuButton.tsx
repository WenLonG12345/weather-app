import React from "react";

const MenuButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return (
    <button
      className="rounded-[10px] md:rounded-[20px] cursor-pointer bg-primary dark:bg-[#28124D] hover:bg-primary-hover hover:dark:bg-[#3A1D6A] text-white min-w-[50px] min-h-[50px] md:min-w-[60px] md:min-h-[60px] text-[22px] md:text-[26px] flex items-center justify-center"
      {...rest}
    >
      {children}
    </button>
  );
};

export default MenuButton;
