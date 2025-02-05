import { IWeatherReq, IWeatherRes } from "../../types/weather";
import axiosUtils from "../../utils/axiosUtils";

export const getCurrentWeather = async (
  params: IWeatherReq
): Promise<IWeatherRes> => {
  return await axiosUtils.get("/weather", { params });
};
