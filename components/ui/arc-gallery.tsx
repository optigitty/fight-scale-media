"use client";

import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export type ArcGalleryItem = {
  src: string;
  views: string;
};

type ArcGalleryProps = {
  items: ArcGalleryItem[];
  startAngle?: number;
  endAngle?: number;
  radiusLg?: number;
  radiusMd?: number;
  radiusSm?: number;
  cardSizeLg?: number;
  cardSizeMd?: number;
  cardSizeSm?: number;
  className?: string;
};

export const ArcGallery: React.FC<ArcGalleryProps> = ({
  items,
  startAngle = 15,
  endAngle = 165,
  radiusLg = 520,
  radiusMd = 380,
  radiusSm = 240,
  cardSizeLg = 170,
  cardSizeMd = 130,
  cardSizeSm = 90,
  className = "",
}) => {
  const [dimensions, setDimensions] = useState({
    radius: radiusLg,
    cardSize: cardSizeLg,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setDimensions({ radius: radiusSm, cardSize: cardSizeSm });
      } else if (width < 1024) {
        setDimensions({ radius: radiusMd, cardSize: cardSizeMd });
      } else {
        setDimensions({ radius: radiusLg, cardSize: cardSizeLg });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [radiusLg, radiusMd, radiusSm, cardSizeLg, cardSizeMd, cardSizeSm]);

  const count = Math.max(items.length, 2);
  const step = (endAngle - startAngle) / (count - 1);

  return (
    <div
      className={`relative w-full ${className}`}
      style={{ height: dimensions.radius * 0.85 }}
    >
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
        {items.map((item, i) => {
          const angle = startAngle + step * i;
          const angleRad = (angle * Math.PI) / 180;
          const x = Math.cos(angleRad) * dimensions.radius;
          const y = Math.sin(angleRad) * dimensions.radius;

          return (
            <div
              key={item.src}
              className="absolute opacity-0 animate-arc-fade-in"
              style={{
                width: dimensions.cardSize,
                height: dimensions.cardSize * (16 / 9),
                left: `calc(50% + ${x}px)`,
                bottom: `${y}px`,
                transform: "translate(-50%, 50%)",
                animationDelay: `${i * 90}ms`,
                animationFillMode: "forwards",
                zIndex: count - Math.abs(i - count / 2),
              }}
            >
              <div
                className="relative h-full w-full overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10 transition-transform duration-300 hover:scale-105"
                style={{ transform: `rotate(${(angle - 90) / 8}deg)` }}
              >
                <img
                  src={item.src}
                  alt={`Reel ${i + 1}`}
                  className="block h-full w-full object-cover"
                  draggable={false}
                />
                <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 backdrop-blur-sm">
                  <Eye className="h-3 w-3 text-white" strokeWidth={2} />
                  <span className="text-[11px] font-medium leading-none text-white">
                    {item.views}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <style>{`
        @keyframes arc-fade-in {
          from { opacity: 0; transform: translate(-50%, 60%) scale(0.9); }
          to { opacity: 1; transform: translate(-50%, 50%) scale(1); }
        }
        .animate-arc-fade-in {
          animation-name: arc-fade-in;
          animation-duration: 0.8s;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};
