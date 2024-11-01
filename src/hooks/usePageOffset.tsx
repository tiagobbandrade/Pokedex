import { useEffect, useState } from "react";

type PageOffsetType = {
  x: number;
  y: number;
};

export function usePageOffset() {
  const [pageOffset, setPageOffset] = useState<PageOffsetType>({
    y: 0,
    x: 0,
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPageOffset({ x: window.scrollX, y: window.scrollY });
    });
  });

  const { x: offsetX, y: offsetY } = pageOffset;

  return { offsetX, offsetY };
}
