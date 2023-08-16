import type { LoaderArgs } from "@remix-run/node";
import { getTimeBeforeFlight } from "~/hooks/useTimeRemainingBeforeFlight";
import { createCanvas, loadImage } from "canvas";
import { image } from "remix-utils";

export const config = { runtime: "edge" };

const backgroundImg = "https://canada.valentin-thomas.com/castor.jpg";
const width = 1200;
const height = 630;
export const loader = async ({ request }: LoaderArgs) => {
  const timebeforeFlight = getTimeBeforeFlight();

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  await loadImage(backgroundImg).then((img) => {
    ctx.drawImage(img, 0, -(height / 1.5), width, height * 2);
  });

  ctx.fillStyle = "#ee5253";
  ctx.roundRect(
    width / 7,
    (height / 7) * 5.45,
    (width / 7) * 5,
    height / 10,
    10
  );
  ctx.fill();

  ctx.font = "bold 40pt Menlo";
  ctx.textAlign = "center";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(
    `${timebeforeFlight.days} days ${timebeforeFlight.hours} hours ${timebeforeFlight.minutes} minutes`,
    width / 2,
    (height / 7) * 6
  );

  return image(canvas.toBuffer(), { type: "image/png" });
};
