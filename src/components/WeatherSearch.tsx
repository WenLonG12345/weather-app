import React, { useEffect } from "react";
import { countryList } from "../utils/constants";
import MenuButton from "./MenuButton";
import { FaSearch } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISearchWeather, SearchWeatherSchema } from "../types/weather";
import { useUserStore } from "../services/store/useUserStore";

interface IWeatherSearch {
  onWeatherSearch: (data: ISearchWeather) => void;
}

const WeatherSearch: React.FC<IWeatherSearch> = ({ onWeatherSearch }) => {
  const addHistory = useUserStore((state) => state.addHistory);

  const form = useForm<ISearchWeather>({
    resolver: zodResolver(SearchWeatherSchema),
  });

  const onFormSubmit = (data: ISearchWeather) => {
    addHistory({
      ...data,
      id: new Date().getTime().toString(),
      searchedAt: new Date().toISOString(),
    });
    onWeatherSearch(data);
  };

  useEffect(() => {
    form.reset({
      cityName: "",
      countryCode: "",
    });
  }, [form.formState.isSubmitSuccessful]);

  const isError =
    form.formState.errors.cityName || form.formState.errors.countryCode;

  return (
    <div>
      <form
        className="flex flex-row gap-[10px] md:gap-[20px] items-center"
        onSubmit={form.handleSubmit(onFormSubmit)}
      >
        <div className="rounded-[20px] bg-white/20 dark:bg-[#1a1a1a]/50 w-full min-h-[40px] md:min-h-[60px] px-5 py-1">
          <h3 className="text-black/40 dark:text-white/40 text-sm md:text-base">
            City
          </h3>
          <input
            type="text"
            className="outline-none focus:ring-0 focus:border-transparent cursor-text placeholder:text-gray-500 text-black dark:text-white dark:placeholder:text-gray-400 text-sm md:text-base"
            placeholder="Enter City Name"
            {...form.register("cityName")}
          />
        </div>
        <div className="rounded-[20px] bg-white/20 dark:bg-[#1a1a1a]/50 w-full min-h-[40px] md:min-h-[60px] px-5 py-1">
          <h3 className="text-black/40 dark:text-white/40 text-sm md:text-base">
            Country
          </h3>
          <Controller
            control={form.control}
            name="countryCode"
            render={({ field }) => (
              <select
                defaultValue={""}
                className="outline-none focus:ring-0 focus:border-transparent cursor-text text-black dark:text-white text-sm md:text-base"
                {...field}
              >
                <option value="" disabled hidden>
                  Select
                </option>
                {countryList.map((country) => (
                  <option
                    value={country.abbreviation}
                    key={country.abbreviation}
                    className=""
                  >
                    {country.country}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
        <MenuButton type="submit">
          <FaSearch />
        </MenuButton>
        <ThemeToggle />
      </form>

      {isError && (
        <div className="text-red-500 dark:text-red-400 ml-2">
          {form?.formState?.errors?.cityName?.message ||
            form?.formState?.errors?.countryCode?.message}
        </div>
      )}
    </div>
  );
};

export default WeatherSearch;
