import Image from "next/image";
import Link from "next/link";
import Author from "./author";
import fetcher from "../../lib/fetcher";
import Spinner from "../_child/spinner";
import Error from "../_child/error";

export default function related() {
  const { data, isLoading, isError } = fetcher(`api/posts`);
  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    return <Error />;
  }

  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10 text-center">Related</h1>

      <div className="flex flex-col gap-10">
        {data.map((value, index) => (
          <Post key={index} data={value} />
        ))}
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, description, category, img, published, author } = data;

  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <Image src={img || ""} className="rounded" width={200} height={150} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${id}`}>
            <div className="text-red-600 hover:text-red-500">
              {category || "Unknown"}
            </div>
            <div className="text-gray-600 hover:text-gray-500">
              {published || "Unknown"}
            </div>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <div className="text-xl font-bold text-gray-600 hover:text-gray-600">
              {title || "Title"}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
