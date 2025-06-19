// components/Carousel.tsx
"use client";
import { useState } from "react";
import Image from "next/image";

type CarouselProps = { images: string[]; altPrefix?: string };

export function Carousel({ images, altPrefix = "Image" }: CarouselProps) {
  const [idx, setIdx] = useState(0);
  return (
    <div className="relative w-full h-full">
      <Image
        src={images[idx]}
        alt={`${altPrefix} ${idx + 1}`}
        fill
        style={{ objectFit: "cover" }}
        className="rounded-b-2xl"
      />
      {images.length > 1 && (
        <div className="absolute inset-0 flex justify-between items-center px-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-3 h-3 rounded-full bg-white/80 ${
                idx === i ? "bg-blue-500" : ""
              } transition`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
