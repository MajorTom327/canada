import React from "react";
import { Countdown } from "react-daisyui";

type Props = {
  value: number;
};

export const CountdownItem: React.FC<Props> = ({ value }) => {
  return (
    <Countdown
      value={value}
      className="bg-primary-focus text-primary-content rounded-lg text-2xl p-2"
    />
  );
};

CountdownItem.defaultProps = {};

export default CountdownItem;
