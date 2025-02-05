import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import { FaSearch } from "react-icons/fa";
import MenuButton from "../components/MenuButton";

const HomePage = () => {
  return (
    <div className="bg-[url(/images/bg-light.png)] dark:bg-[url(/images/bg-dark.png)] bg-center min-h-screen py-5">
      <div className="container mx-auto">
        <div className="flex flex-row gap-[10px] md:gap-[20px] items-center">
          <div className="rounded-[20px] bg-white/20 dark:bg-[#1a1a1a]/50 w-full min-h-[40px] md:min-h-[60px] px-5 py-1">
            <h3 className="text-black/40 dark:text-white/40 text-sm md:text-base">
              Country
            </h3>
            <input
              type="text"
              className="outline-none focus:ring-0 focus:border-transparent cursor-text placeholder:text-gray-500 text-black dark:text-white dark:placeholder:text-gray-400 text-sm md:text-base"
              placeholder="Enter Country Name"
            />
          </div>
          <MenuButton>
            <FaSearch />
          </MenuButton>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
