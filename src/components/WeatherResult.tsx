import React from "react";
import { ISearchQuery, IWeatherRes } from "../types/weather";
import { formatDateTime } from "../utils/date";
import SearchHistory from "./SearchHistory";
import { FaCircleInfo } from "react-icons/fa6";

interface IWeatherResult {
  onWeatherSearch: (data: ISearchQuery) => void;
  result?: IWeatherRes;
}

const WeatherResult: React.FC<IWeatherResult> = ({
  result,
  onWeatherSearch,
}) => {
  return (
    <div className="dark:text-white relative">
      {result && (
        <img
          alt="weather"
          src={
            result?.weather &&
            result?.weather.length !== 0 &&
            result?.weather[0].id &&
            result?.weather[0].id < 800
              ? "/images/cloud.png"
              : "/images/sun.png"
          }
          className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] absolute right-0 top-[-50px] md:top-[-120px]"
        />
      )}
      <div className="rounded-[20px] md:rounded-[40px] bg-white/30 dark:bg-[#1a1a1a]/30 p-5 md:p-10 border-[1px] border-white dark:border-none mt-[60px] md:mt-[150px]">
        <div className="font-semibold">Today's Weather</div>

        {result ? (
          <>
            <div className="text-[60px] leading-[60px] md:text-[120px] md:leading-[120px] text-primary dark:text-white font-semibold">
              {`${result?.main?.temp}°`}
            </div>

            <div>{`H: ${result?.main?.temp_max}° L: ${result?.main?.temp_min}°`}</div>

            <div className="flex flex-row justify-between items-center text-sm text-[#666666] dark:text-white">
              <div className="font-semibold text-nowrap w-full">{`${result?.name}, ${result?.sys?.country}`}</div>

              <div className="flex flex-col-reverse md:flex-row justify-between items-end md:items-center w-full">
                <div>{formatDateTime(result?.dt)}</div>
                <div>{`Humidity: ${result?.main?.humidity}%`}</div>
                {result?.weather && result?.weather.length !== 0 && (
                  <div>{result?.weather[0].main}</div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="text-gray-500 dark:text-gray-200 flex flex-row gap-2 items-center">
            <FaCircleInfo size={20}/>
            <div>Please search weather by city name and country</div>
          </div>
        )}

        <SearchHistory onWeatherSearch={onWeatherSearch} />
      </div>
    </div>
  );
};

export default WeatherResult;
