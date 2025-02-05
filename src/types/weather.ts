import { z } from "zod";

export type IWeatherReq = {
  q: string;
  appid: string;
  exclude?: "current" | "minutely" | "hourly" | "daily" | "alerts";
  units?: "standard" | "metric" | "imperial";
  lang?: string;
};

export type IWeatherRes = {
  coord?: {
    lon?: number;
    lat?: number;
  };
  weather?: {
    id?: number;
    main?: string;
    description?: string;
    icon?: string;
  }[];
  base?: string;
  main?: {
    temp?: number;
    feels_like?: number;
    temp_min?: number;
    temp_max?: number;
    pressure?: number;
    humidity?: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility?: number;
  wind?: {
    speed?: number;
    deg?: number;
  };
  clouds?: {
    all?: number;
  };
  dt?: number;
  sys?: {
    type?: number;
    id?: number;
    country?: string;
    sunrise?: number;
    sunset?: number;
  };
  timezone?: number;
  id?: number;
  name?: string;
  cod?: number;
};

export const SearchWeatherSchema = z.object({
  cityName: z.string(),
  countryCode: z.string(),
});
export type ISearchWeather = z.infer<typeof SearchWeatherSchema>;
