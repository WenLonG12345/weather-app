import dayjs from "dayjs";

export const formatDateTime = (date: string | number | undefined) => {
  if (!date) return "";
  return dayjs(date).format("DD-MM-YYYY hh:mm:a");
};
