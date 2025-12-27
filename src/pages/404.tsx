import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="w-full bg-gray-100 h-screen flex items-center flex-col justify-center gap-4">
      <h2 className="font-heading text-3xl px-4 sm:px-8">
        The page you are trying to look doesn't found
      </h2>
      <Link
        to="/"
        className="px-6 text-white bg-teal-600 rounded-md py-3 flex items-center justify-center gap-3 text-lg cursor-pointer font-heading hover:bg-teal-700 font-medium transition-all hover:scale-95"
      >
        <MdArrowBackIosNew />
        Go to Dashboard
      </Link>
    </div>
  );
}
