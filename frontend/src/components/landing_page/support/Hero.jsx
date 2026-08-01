import { FiSearch } from "react-icons/fi";

export function Hero() {
  return (
    <div className=" flex flex-col gap-15 w-full px-40  h-60 bg-gray-200 pt-10">
      <div className="flex justify-between w-full ">
        <h1 className="text-4xl font-bold">Support Portal</h1>
        <button className=" text-xl text-white bg-blue-500 rounded-[5px] w-[140px] hover:bg-black">
          My Tickets
        </button>
      </div>
      <div className="relative w-full">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />

        <input
          type="text"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
          className="w-full h-[50px] border border-gray-300 rounded-lg pl-12 pr-4 focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
}
