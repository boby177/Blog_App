import Image from "next/image";
import Link from "next/link";
import Author from "../components/_child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image px-10">
        <Link href={"/"}>
          <Image src={"/images/img1.jpg"} width={600} height={600} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
            <div className="text-3xl md:text-6xl font-bold text-gray-600 hover:text-gray-600">
              Learn about next JS and tailwind css
            </div>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
          nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
          sit amet erat.
        </p>
        <Author />
      </div>
    </div>
  );
}

export default function section1() {
  SwiperCore.use([Autoplay]);
  const bgImage = {
    background: "url('/images/banner.png')no-repeat",
    backgroundPosition: "right",
  };

  return (
    <section className="py-16" style={bgImage}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending Posts</h1>

        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
        >
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
