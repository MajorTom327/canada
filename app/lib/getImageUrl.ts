import { pathEq, propOr } from "ramda";

type ImageWidth = 640 | 750 | 828 | 1080 | 1200;

type Options = Partial<{
  width: ImageWidth;
  quality: number;
}>;

export const getImageUrl = (src: string, options?: Options) => {
  const params = new URLSearchParams({});

  // @ts-expect-error - Ramda types are incorrect
  if (pathEq("development", ["env", "NODE_ENV"], process)) {
    return src;
  }

  params.append("url", src);
  // @ts-ignore
  params.append("w", propOr(1200, "width", options).toString());
  // @ts-ignore
  params.append("q", propOr(75, "quality", options).toString());
  return `/_vercel/image?${params}`;
};

export default getImageUrl;
