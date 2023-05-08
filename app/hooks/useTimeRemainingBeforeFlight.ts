import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const flightDate = DateTime.fromFormat("2023-10-25 09:30", "yyyy-MM-dd HH:mm");

const getDiff = () => {
  return flightDate.diff(DateTime.local()).rescale();
};

export const useTimeRemainingBeforeFlight = () => {
  const [remaining, setRemaining] = useState(getDiff());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(getDiff());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return remaining;
};

export default useTimeRemainingBeforeFlight;
