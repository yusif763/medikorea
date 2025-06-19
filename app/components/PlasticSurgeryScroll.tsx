'use client';

import { useEffect, useRef } from 'react';

export default function PlasticSurgeryCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const img1 = new Image(); // crooked nose
    const img2 = new Image(); // perfect nose
    let progress = 0;

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const faceWidth = 300;
      const faceHeight = 400;
      const x = width - faceWidth; // right side of screen
      const y = (height - faceHeight);

      // Crooked face with decreasing opacity
      ctx.globalAlpha = 1 - progress;
      ctx.drawImage(img1, x, y, faceWidth, faceHeight);

      // Perfect face on top with increasing opacity
      ctx.globalAlpha = progress;
      ctx.drawImage(img2, x, y, faceWidth, faceHeight);
    };

    const onScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      progress = Math.min(window.scrollY / maxScroll, 1); // Ensure progress stays between 0 and 1
      draw();
    };

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    img1.src = '/needsurgery.png';
    img2.src = '/alreadysurgery.png';

    img1.onload = img2.onload = () => {
      onResize();
      draw();
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="relative h-[200vh] bg-white opacity-[0.6]">
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full" />
    </div>
  );
}
