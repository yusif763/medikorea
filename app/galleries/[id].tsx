'use client'
import { useRouter } from "next/router";

const mockData = {
  photo: {
    title: "Photo Gallery",
    description: "Explore our collection of photos.",
    image: "/photo-gallery.jpg",
  },
  video: {
    title: "Video Gallery",
    description: "Watch our curated video content.",
    image: "/video-gallery.jpg",
  },
};

export default function Galleries() {
  const router = useRouter();
  const { id } = router.query;
  const data = mockData[id as keyof typeof mockData];

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <img src={data.image} alt={data.title} className="w-full h-64 object-cover mb-4" />
      <p className="text-lg">{data.description}</p>
    </div>
  );
}
