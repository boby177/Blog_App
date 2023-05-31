import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author3";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function section3() {
  const { data, isLoading, isError } = fetcher(`api/popular`);
  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    return <Error />;
  }

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
        {data.map((value, index) => (
          <SwiperSlide key={index}>
            <Post data={value} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function Post({ data }) {
  const { id, title, description, category, img, published, author } = data;

  return (
    <div className="grid px-10">
      <div className="images">
        <Image src={img} width={600} height={400} />
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={"/"}>
            <div className="text-red-600 hover:text-red-500">
              {category || "Unknown"}
            </div>
            <div className="text-gray-600 hover:text-gray-500">
              {published || "Unknown"}
            </div>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <div className="text-3xl md:text-4xl font-bold text-gray-600 hover:text-gray-600">
              {title || "title"}
            </div>
          </Link>
        </div>
        <p className="text-gray-500 py-3">{description || "description"}</p>
        {author ? <Author /> : <></>}
      </div>
    </div>
  );
}
