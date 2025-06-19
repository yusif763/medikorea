'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/parallax';
import 'swiper/css/pagination';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <Swiper
        modules={[Parallax, Pagination]}
        speed={700}
        parallax={true}
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="h-full"
      >
        <div
          slot="container-start"
          className="absolute inset-0 bg-cover bg-center"
          data-swiper-parallax="-23%"
          style={{
            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1682096547754-b2bb5151211a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image
          }}
        />

        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-full text-white text-center px-6 lg:px-20 backdrop-blur-sm bg-black/30">
            <h1
              className="text-4xl md:text-6xl font-bold drop-shadow-lg"
              data-swiper-parallax="-300"
            >
              Your Personal Medical Guide in Korea
            </h1>
            <p
              className="text-lg md:text-2xl mt-4 text-blue-100"
              data-swiper-parallax="-200"
            >
              Trusted plastic surgery, skin care, and wellness support — just for you.
            </p>
            <button
              data-swiper-parallax="-100"
              className="mt-8 px-6 py-3 bg-white text-[#0641c9] rounded-full font-semibold shadow-lg hover:bg-[#E2CFC9]/60 transition"
            >
              Request Consultation
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-full text-white text-center px-6 lg:px-20 backdrop-blur-sm bg-black/30">
            <h1
              className="text-4xl md:text-6xl font-bold drop-shadow-lg"
              data-swiper-parallax="-300"
            >
              Premium Korean Healthcare Concierge
            </h1>
            <p
              className="text-lg md:text-2xl mt-4 text-blue-100"
              data-swiper-parallax="-200"
            >
              Full support from airport to surgery, tailored to your beauty journey.
            </p>
            <button
              data-swiper-parallax="-100"
              className="mt-8 px-6 py-3 bg-white  text-[#0641c9] rounded-full font-semibold shadow-lg hover:bg-[#E2CFC9]/60 transition"
            >
              Book Your Trip
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-full text-white text-center px-6 lg:px-20 backdrop-blur-sm bg-black/30">            <h1
              className="text-4xl md:text-6xl font-bold drop-shadow-lg"
              data-swiper-parallax="-300"
            >
              Comprehensive Medical Help in Korea
            </h1>
            <p
              className="text-lg md:text-2xl mt-4 text-blue-100"
              data-swiper-parallax="-200"
            >
              From consultations to recovery, we ensure a seamless experience for your health and beauty needs.
            </p>
            <button
              data-swiper-parallax="-100"
              className="mt-8 px-6 py-3 bg-white  text-[#0641c9] rounded-full font-semibold shadow-lg hover:bg-[#E2CFC9]/60 transition"
            >
              Learn More
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
