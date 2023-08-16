import type { V2_MetaFunction } from "@remix-run/node";
import classNames from "classnames";
import { Card } from "react-daisyui";
import CanadaCountdown from "~/components/CanadaCountdown";
import { getTimeBeforeFlight } from "~/hooks/useTimeRemainingBeforeFlight";

import getImageUrl from "~/lib/getImageUrl";

export const meta: V2_MetaFunction = () => {
  const timebeforeFlight = getTimeBeforeFlight();
  return [
    { title: "Canada Countdown" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Canada Countdown" },
    {
      property: "og:image",
      content:
        "https://canada.valentin-thomas.com/" +
        getImageUrl("/castor.jpg", { width: 750 }),
    },
    { property: "og:url", content: "https://canada.valentin-thomas.com" },
    { property: "og:site_name", content: "Canada Countdown" },
    {
      property: "og:description",
      content: `Nous partirons au canada dans ${timebeforeFlight.toHuman()}.`,
    },
    {
      property: "description",
      content: `Nous partirons au canada dans ${timebeforeFlight.toHuman()}.`,
    },

    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: "Canada Countdown" },
    {
      property: "twitter:image",
      content:
        "https://canada.valentin-thomas.com/" +
        getImageUrl("/castor.jpg", { width: 750 }),
    },
    {
      property: "twitter:description",
      content: `Nous partirons au canada dans ${timebeforeFlight.toHuman()}.`,
    },
    { property: "twitter:url", content: "https://canada.valentin-thomas.com" },
  ];
};
const bgImg = getImageUrl("/castor.jpg");

export default function Index() {
  const classes = classNames(
    "flex flex-col justify-end h-screen bg-fixed bg-center bg-no-repeat bg-cover",
    "p-2 sm:p-6 md:p-16 lg:p-32"
  );
  return (
    <div className={classes} style={{ backgroundImage: `url('${bgImg}')` }}>
      <div className="flex justify-center ">
        <Card className=" border-primary-focus bg-primary">
          <Card.Body className="items-center text-center">
            <Card.Title>
              <h1 className="text-4xl font-bold text-primary-content">
                Canada Countdown
              </h1>
            </Card.Title>
            <CanadaCountdown />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
