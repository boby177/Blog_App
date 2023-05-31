import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author4";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function section4() {
  const { data, isLoading, isError } = fetcher(`api/popular`);
  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    return <Error />;
  }

  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12 text-center">Coding</h1>
          <div className="flex flex-col gap-6">
            {data[1] ? <Post data={data[1]} /> : <></>}
            {data[2] ? <Post data={data[2]} /> : <></>}
            {data[3] ? <Post data={data[3]} /> : <></>}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12 text-center">Gadget</h1>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              {data[4] ? <Post data={data[4]} /> : <></>}
              {data[5] ? <Post data={data[5]} /> : <></>}
              {data[2] ? <Post data={data[2]} /> : <></>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, category, img, published, author } = data;

  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Image src={img} className="rounded" width={300} height={250} />
      </div>
      <div className="info flex justify-center flex-col">
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
            <div className="text-xl font-bold text-gray-600 hover:text-gray-600">
              {title || "title"}
            </div>
          </Link>
        </div>
        {/* {author ? <Author /> : <></>} */}
      </div>
    </div>
  );
}
