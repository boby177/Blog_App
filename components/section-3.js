import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author3";

export default function section3() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">
        Most Popular Posts
      </h1>
      {/* Swiper */}
      <Swiper
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
      >
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
      </Swiper>
    </section>
  );
}

function Post() {
  return (
    <div className="grid px-10">
      <div className="images">
        <Image src={"/images/img2.jpg"} width={600} height={400} />
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={"/"}>
            <div className="text-red-600 hover:text-red-500">Next JS </div>
            <div className="text-gray-600 hover:text-gray-500">
              July 3, 2022
            </div>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <div className="text-3xl md:text-4xl font-bold text-gray-600 hover:text-gray-600">
              Material UI for React JS
            </div>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.
        </p>
        <Author />
      </div>
    </div>
  );
}
