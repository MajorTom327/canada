import React from "react";
import useTimeRemainingBeforeFlight from "~/hooks/useTimeRemainingBeforeFlight";
import CountdownItem from "./CountdownItem";

export const CanadaCountdown: React.FC = () => {
  const remaining = useTimeRemainingBeforeFlight();

  return (
    <>
      <div className="flex gap-6">
        <div className="flex gap-2">
          <CountdownItem value={remaining.months} />
          <CountdownItem value={remaining.days} />
        </div>
        <div className="flex gap-2 items-center">
          <CountdownItem value={remaining.hours} />
          <div>:</div>
          <CountdownItem value={remaining.minutes} />
          <div>:</div>
          <CountdownItem value={remaining.seconds} />
        </div>
      </div>
    </>
  );
};

CanadaCountdown.defaultProps = {};

export default CanadaCountdown;
