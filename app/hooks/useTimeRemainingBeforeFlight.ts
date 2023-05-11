import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { flightDate } from "../lib/constants";

export const getTimeBeforeFlight = () => {
  return flightDate
    .diff(DateTime.setLocale("fr-FR").local())
    .rescale()
    .set({ millisecond: 0 })
    .shiftTo("months", "days", "hours", "minutes", "seconds");
};

export const useTimeRemainingBeforeFlight = () => {
  const [remaining, setRemaining] = useState(getTimeBeforeFlight());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(getTimeBeforeFlight());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return remaining;
};

export default useTimeRemainingBeforeFlight;
