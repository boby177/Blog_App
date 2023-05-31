import Image from "next/image";
import Link from "next/link";
import Author from "../components/_child/author2";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function section2() {
  const { data, isLoading, isError } = fetcher(`api/posts`);
  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    return <Error />;
  }

  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
      {/* Grid Columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data.map((value, index) => (
          <Post data={value} key={index} />
        ))}
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, subtitle, category, img, published, author } = data;
  return (
    <div className="item">
      <div className="images">
        <Image src={img || "/"} className="rounded" width={500} height={350} />
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
            <div className="text-xl font-bold text-gray-600 hover:text-gray-600">
              {title || "Title"}
            </div>
          </Link>
        </div>
        <p className="text-gray-500 py-3">{subtitle || "Subtitle"}</p>
        {author ? <Author /> : <></>}
      </div>
    </div>
  );
}
