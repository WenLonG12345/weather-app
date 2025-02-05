import { useQuery } from "@tanstack/react-query";
import WeatherResult from "../components/WeatherResult";
import WeatherSearch from "../components/WeatherSearch";
import { useState } from "react";
import { ISearchQuery } from "../types/weather";
import { getCurrentWeather } from "../services/api/weather";

const { VITE_API_KEY } = import.meta.env;

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState<ISearchQuery>();

  const weatherQuery = useQuery({
    queryKey: ["weather", searchQuery],
    queryFn: () =>
      getCurrentWeather({
        q: `${searchQuery?.cityName},${searchQuery?.countryCode}`,
        appid: VITE_API_KEY,
        units: "metric",
      }),
    enabled: !!searchQuery,
    refetchOnWindowFocus: true,
    retry: 1,
  });

  return (
    <div className="bg-[url(/images/bg-light.png)] dark:bg-[url(/images/bg-dark.png)] bg-center min-h-screen py-5">
      <div className="container mx-auto">
        <WeatherSearch
          onWeatherSearch={(data) => {
            setSearchQuery(data);
            weatherQuery.refetch();
          }}
          isLoading={weatherQuery.isLoading}
          error={weatherQuery.error}
        />

        <WeatherResult
          onWeatherSearch={(data) => {
            setSearchQuery(data);
            weatherQuery.refetch();
          }}
          result={weatherQuery.data}
        />
      </div>
    </div>
  );
};

export default HomePage;
