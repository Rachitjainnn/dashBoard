import { CiSettings } from "react-icons/ci";
export default function Navbar() {
  return (
    <header className="h-20 w-full border-1 border-gray-300 px-6 flex justify-end items-center gap-5">
      <CiSettings className="w-7 h-5  text-gray-500 hover:text-gray-700" />
      <img
        src="https://i.pravatar.cc/36"
        alt="User"
        className="w-10 h-10 rounded-full object-cover mr-4"
      />
    </header>
  );
}

