import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap mt-12">
      {/* Item 1*/}
      <Link
        href={"/test"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://images.pexels.com/photos/23882647/pexels-photo-23882647/free-photo-of-a-tree-with-pink-flowers-against-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            alt="some pic"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src={
              "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            }
            alt="some pic"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-gio text-gio w-max py-2 px-4 text-xs hover:bg-gio hover:text-white">
          Add to Cart
        </button>
      </Link>

      {/* Item 2*/}
      <Link
        href={"/test"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://images.pexels.com/photos/23882647/pexels-photo-23882647/free-photo-of-a-tree-with-pink-flowers-against-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            alt="some pic"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src={
              "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            }
            alt="some pic"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-gio text-gio w-max py-2 px-4 text-xs hover:bg-gio hover:text-white">
          Add to Cart
        </button>
      </Link>

      {/* Item 3*/}
      <Link
        href={"/test"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://images.pexels.com/photos/23882647/pexels-photo-23882647/free-photo-of-a-tree-with-pink-flowers-against-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            alt="some pic"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src={
              "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            }
            alt="some pic"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-gio text-gio w-max py-2 px-4 text-xs hover:bg-gio hover:text-white">
          Add to Cart
        </button>
      </Link>

      {/* Item 4*/}
      <Link
        href={"/test"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://images.pexels.com/photos/23882647/pexels-photo-23882647/free-photo-of-a-tree-with-pink-flowers-against-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            alt="some pic"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src={
              "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            }
            alt="some pic"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-gio text-gio w-max py-2 px-4 text-xs hover:bg-gio hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
