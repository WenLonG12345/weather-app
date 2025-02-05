import WeatherResult from "../components/WeatherResult";
import WeatherSearch from "../components/WeatherSearch";

const HomePage = () => {
  return (
    <div className="bg-[url(/images/bg-light.png)] dark:bg-[url(/images/bg-dark.png)] bg-center min-h-screen py-5">
      <div className="container mx-auto">
        <WeatherSearch onWeatherSearch={(data) => {}} />

        <WeatherResult />
      </div>
    </div>
  );
};

export default HomePage;
