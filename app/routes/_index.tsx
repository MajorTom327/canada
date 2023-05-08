import type { V2_MetaFunction } from "@remix-run/node";
import classNames from "classnames";
import { Card } from "react-daisyui";
import CanadaCountdown from "~/components/CanadaCountdown";
import getImageUrl from "~/lib/getImageUrl";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Canada Countdown" }];
};
const bgImg = getImageUrl("/castor.jpg");

export default function Index() {
  const classes = classNames(
    "flex flex-col justify-end h-screen bg-fixed bg-center bg-no-repeat bg-cover p-32"
  );
  return (
    <div className={classes} style={{ backgroundImage: `url('${bgImg}')` }}>
      <div className="flex justify-center ">
        <Card className=" border-primary-focus bg-primary">
          <Card.Body className="items-center text-center">
            <Card.Title>
              <h1 className="text-4xl font-bold">Canada Countdown</h1>
            </Card.Title>
            <CanadaCountdown />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
