import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { api } from "@/api";
import { IMAGE_URL } from "@/const";
import type { ISlideType } from "@/types";
import type { Swiper as SwiperType } from "swiper";
import HeroSkeleton from "@/components/skeleton/HeroSkeleton"; 

const Hero = () => {
  const [slides, setSlides] = useState<ISlideType[]>([]);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await api.get("trending/movie/day");
        const data = res.data.results;
        const latestFive = data.slice(0, 5);
        setSlides(latestFive);
      } catch (error) {
        console.error("Failed to fetch slides:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchSlides();
  }, []);

  if (loading) {
    return <HeroSkeleton />;
  }

  return (
    <section className="relative mt-18">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        } as any}
        loop={true}
        spaceBetween={10}
        navigation={true}
        autoplay={{ delay: 3000 }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mb-[20px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[640px]">
              <img
                src={`${IMAGE_URL}${slide.backdrop_path ? slide.poster_path: "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-7509.jpg" }`}
                alt={slide.title || slide.name}
                className="object-cover w-full h-full rounded-xl"
              />
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-2xl font-bold">
                  {slide.title || slide.name}
                </h2>
                <button className="bg-red-600 px-4 py-2 mt-2 rounded cursor-pointer">
                  Watch
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper lg:w-[400px] md:w-[300px] sm:w-[300px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={`thumb-${slide.id}`}>
            <img
              src={`${IMAGE_URL}${slide.poster_path ? slide.backdrop_path: "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-7509.jpg"}`}
              alt={slide.title || slide.name}
              className="object-cover w-28 h-20 rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default React.memo(Hero);
