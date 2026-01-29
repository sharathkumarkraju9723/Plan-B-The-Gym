import classSchedules from "../data/scheduleSource";
import { DAYS } from "./constants";

export const getScheduleByClass = (className) => {
  const schedule = classSchedules[className];

  if (!schedule) return {};

  const result = {};

  DAYS.forEach((day) => {
    result[day] = schedule[day] || [];
  });

  return result;
};
