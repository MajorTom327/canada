import { DateTime } from "luxon";

export const flightDate = DateTime.fromFormat(
  "2023-10-25 09:30",
  "yyyy-MM-dd HH:mm"
);
