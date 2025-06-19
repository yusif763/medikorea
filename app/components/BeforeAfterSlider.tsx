// components/BeforeAfterSlider.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const cases = [
  { before: "/images/before1.jpg", after: "/images/after1.jpg" },
  { before: "/images/before2.jpg", after: "/images/after2.jpg" },
];

export default function BeforeAfterSlider() {
  return (
    <section className="py-20 bg-gray-100 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Before / After</h2>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
      >
        {cases.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <img src={item.before} className="w-full md:w-1/2 rounded-xl shadow" alt="Before" />
              <img src={item.after} className="w-full md:w-1/2 rounded-xl shadow" alt="After" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
