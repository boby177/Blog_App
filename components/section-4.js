import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author4";

export default function section4() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12 text-center">Coding</h1>
          <div className="flex flex-col gap-6">
            {Post()}
            {Post()}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12 text-center">Gadget</h1>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              {Post()}
              {Post()}
              {Post()}
            </div>
          </div>
        </div>
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
