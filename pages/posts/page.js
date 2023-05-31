import Format from "../../layouts/format";
import Author from "@/components/_child/author";
import Image from "next/image";
import Related from "@/components/_child/related";

export default function page() {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author></Author>
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            Learn about next js and tailwind css
          </h1>
          <p className="text-gray-500 text-xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus faucibus scelerisque eleifend donec pretium vulputate
            sapien nec sagittis.
          </p>
          <div className="py-10">
            <Image src={"/images/img1.jpg"} height={900} width={900} />
          </div>

          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <Related />
      </section>
    </Format>
  );
}
