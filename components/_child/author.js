import Image from "next/image";
import Link from "next/link";

export default function author() {
  return (
    <div className="author flex py-5">
      <Image
        src={"/images/author/author2.png"}
        className="rounded-full"
        width={60}
        height={60}
      ></Image>
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"}>
          <div className="text-md font-bold text-gray-800 hover:text-gray-600">
            Boby M
          </div>
          <span className="text-sm text-gray-500">Web Developer</span>
        </Link>
      </div>
    </div>
  );
}
