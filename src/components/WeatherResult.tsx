import React from "react";
import { IoMdSearch } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import { useUserStore } from "../services/store/useUserStore";
import { ISearchQuery, IWeatherRes } from "../types/weather";
import { formatDateTime } from "../utils/date";
import { isEmpty } from "lodash";

interface IWeatherResult {
  onWeatherSearch: (data: ISearchQuery) => void;
  result?: IWeatherRes;
}

const WeatherResult: React.FC<IWeatherResult> = ({
  result,
  onWeatherSearch,
}) => {
  const history = useUserStore((state) => state.history);
  const deleteHistory = useUserStore((state) => state.deleteHistory);

  return (
    <div className="dark:text-white relative">
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
      <div className="rounded-[20px] md:rounded-[40px] bg-white/30 dark:bg-[#1a1a1a]/30 p-5 md:p-10 border-[1px] border-white dark:border-none mt-[60px] md:mt-[150px]">
        <div>Today's Weather</div>

        {result && (
          <>
            <div className="text-[120px] leading-[120px] text-primary dark:text-white font-semibold">
              {`${result?.main?.temp}°`}
            </div>

            <div>{`H: ${result?.main?.temp_max}° L: ${result?.main?.temp_min}°`}</div>

            <div className="flex flex-row justify-between items-center">
              <div>{`${result?.name}, ${result?.sys?.country}`}</div>
              <div>{formatDateTime(result?.dt)}</div>
              <div>{`Humidity: ${result?.main?.humidity}%`}</div>
              {result?.weather && result?.weather.length !== 0 && (
                <div>{result?.weather[0].main}</div>
              )}
            </div>
          </>
        )}

        <div className="bg-white/20 dark:bg-[#1a1a1a]/30 py-5 px-4 rounded-[20px] mt-10">
          <div className="mb-3">Search History</div>

          {isEmpty(history) ? (
            <div className="text-center h-[50px]">No Record</div>
          ) : (
            history?.map((item) => (
              <div
                key={item.id}
                className="flex flex-row justify-between items-center bg-white/40 shadow-md rounded-[20px] px-4 py-5 dark:bg-[#1a1a1a]/50 mb-3"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center w-full mr-2">
                  <div>{`${item.cityName} ${item.countryCode}`}</div>
                  <div>{formatDateTime(item.searchedAt)}</div>
                </div>

                <div className="flex flex-row gap-2 items-center">
                  <button
                    className="bg-white dark:bg-[#1a1a1a]/50 hover:bg-gray-100 dark:hover:bg-[#454545] rounded-full p-2 text-[#93919e] cursor-pointer"
                    onClick={() =>
                      onWeatherSearch({
                        cityName: item.cityName,
                        countryCode: item.countryCode,
                      })
                    }
                  >
                    <IoMdSearch size={25} />
                  </button>
                  <button
                    className="bg-white dark:bg-[#1a1a1a]/50 hover:bg-gray-100 dark:hover:bg-[#454545] rounded-full p-2 text-[#93919e] cursor-pointer"
                    onClick={() => deleteHistory(item.id)}
                  >
                    <AiFillDelete size={25} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherResult;
