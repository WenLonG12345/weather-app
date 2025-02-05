import React from "react";
import { useUserStore } from "../services/store/useUserStore";
import { IoMoon, IoSunny } from "react-icons/io5";
import MenuButton from "./MenuButton";

const ThemeToggle = () => {
  const theme = useUserStore((state) => state.theme);
  const setTheme = useUserStore((state) => state.setTheme);

  return (
    <MenuButton onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <IoMoon /> : <IoSunny />}
    </MenuButton>
  );
};

export default ThemeToggle;
