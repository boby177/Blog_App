import Image from "next/image";
import Link from "next/link";
import Author from "../components/_child/author2";

export default function section2() {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
      {/* Grid Columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="item">
      <div className="images">
        <Image
          src={"/images/img4.png"}
          className="rounded"
          width={500}
          height={350}
        />
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={"/"}>
            <div className="text-red-600 hover:text-red-500">Gadget </div>
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
