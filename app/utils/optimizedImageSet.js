export const buildOptimizedImageSet = (src, width = 600, quality = 60) => {
  if (!src) {
    return undefined;
  }

  const encodedSrc = encodeURIComponent(src);
  const baseWidth = Number.isFinite(width) && width > 0 ? Math.round(width) : 600;
  const retinaWidth = baseWidth * 2;

  return `image-set(url("/_next/image?url=${encodedSrc}&w=${baseWidth}&q=${quality}") 1x, url("/_next/image?url=${encodedSrc}&w=${retinaWidth}&q=${quality}") 2x)`;
};
