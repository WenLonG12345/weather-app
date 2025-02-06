import React from "react";
import { useUserStore } from "../services/store/useUserStore";
import { isEmpty } from "lodash";
import { formatDateTime } from "../utils/date";
import { ISearchQuery } from "../types/weather";
import { IoMdSearch } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";

interface ISearchHistory {
  onWeatherSearch: (data: ISearchQuery) => void;
}

const SearchHistory: React.FC<ISearchHistory> = ({ onWeatherSearch }) => {
  const history = useUserStore((state) => state.history);
  const deleteHistory = useUserStore((state) => state.deleteHistory);
  return (
    <div className="bg-white/20 dark:bg-[rgba(26, 26, 26, 0.3)] py-5 px-4 rounded-[20px] mt-10">
      <div className="mb-3">Search History</div>

      {isEmpty(history) ? (
        <div className="text-center h-[50px]">No Record</div>
      ) : (
        history?.map((item) => (
          <div
            key={item.id}
            className="flex flex-row justify-between items-center text-xs md:text-base bg-white/40 shadow-md rounded-[20px] px-4 py-5 dark:bg-[rgba(26, 26, 26, 0.5)] mb-3"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center w-full mr-2">
              <div>{`${item.cityName} ${item.countryCode}`}</div>
              <div>{formatDateTime(item.searchedAt)}</div>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <button
                className="bg-white dark:bg-[rgba(26, 26, 26, 0.5)] hover:bg-gray-100 dark:hover:bg-[#454545] rounded-full p-2 text-[#93919e] cursor-pointer"
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
                className="bg-white dark:bg-[rgba(26, 26, 26, 0.5)] hover:bg-gray-100 dark:hover:bg-[#454545] rounded-full p-2 text-[#93919e] cursor-pointer"
                onClick={() => deleteHistory(item.id)}
              >
                <AiFillDelete size={25} />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchHistory;
