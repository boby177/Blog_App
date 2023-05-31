import Image from "next/image";
import Link from "next/link";
import Author from "../components/_child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

function Slide({ data }) {
  const { id, title, description, category, img, published, author } = data;

  return (
    <div className="grid md:grid-cols-2">
      <div className="image px-10">
        <Link href={"/"}>
          <Image src={img || "/"} width={600} height={600} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"}>
            <div className="text-red-600 hover:text-red-500">
              {category || "Unknow"}
            </div>
            <div className="text-gray-600 hover:text-gray-500">
              {published || "Unknown"}
            </div>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <div className="text-3xl md:text-6xl font-bold text-gray-600 hover:text-gray-600">
              {title || "Unknown"}
            </div>
          </Link>
        </div>
        <p className="text-gray-500 py-3">{description || "Description"}</p>
        {author ? <Author /> : <></>}
      </div>
    </div>
  );
}

export default function section1() {
  const { data, isLoading, isError } = fetcher(`api/trending`);
  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    return <Error />;
  }

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
          {data.map((value, index) => (
            <SwiperSlide key={index}>
              <Slide data={value} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
