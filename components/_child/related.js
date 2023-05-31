import Image from "next/image";
import Link from "next/link";
import Author from "./author";
import Author2 from "./author2";

export default function related() {
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10 text-center">Related</h1>

      <div className="flex flex-col gap-10">
        {Post()}
        {Post2()}
        {Post()}
        {Post2()}
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Image
          src={"/images/img3.png"}
          className="rounded"
          width={200}
          height={150}
        />
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
            <div className="text-xl font-bold text-gray-600 hover:text-gray-600">
              Material UI for React JS
            </div>
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}

function Post2() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Image
          src={"/images/img4.png"}
          className="rounded"
          width={200}
          height={150}
        />
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
            <div className="text-xl font-bold text-gray-600 hover:text-gray-600">
              Material UI for React JS
            </div>
          </Link>
        </div>
        <Author2 />
      </div>
    </div>
  );
}
