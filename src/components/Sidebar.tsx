import {
  MdLogout,
  MdOutlineGroups2,
  MdOutlinePayments,
  MdOutlineReceiptLong,
} from "react-icons/md";
import { FaBattleNet } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const LINKS = [
  {
    icon: <IoHomeOutline />,
    text: "Home",
    path: "/",
  },
  {
    icon: <MdOutlineGroups2 />,
    text: "Customers",
    path: "/customers",
  },
  {
    icon: <MdOutlinePayments />,
    text: "Payments",
    path: "/payments",
  },
  {
    icon: <MdOutlineReceiptLong />,
    text: "Expenses",
    path: "/expenses",
  },
];

export default function Sidebar() {
  return (
    <section className="flex flex-col justify-between bg-linear-to-b from-teal-500 to-teal-800 h-screen py-8 px-6">
      <div>
        <div className="flex gap-4">
          <div>
            <FaBattleNet size={40} color="white" />
          </div>
          <div>
            <h1 className="font-heading text-3xl text-white font-semibold tracking-tight">
              ISP Desk
            </h1>
          </div>
        </div>

        <ul className="mt-16 space-y-2 font-heading">
          {LINKS.map((el, index) => (
            <li key={index}>
              <NavLink
                to={el.path}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 bg-white text-teal-700 text-lg py-3 rounded-md px-4"
                    : "flex items-center gap-3 text-white text-xl py-3 hover:bg-gray-100/10 rounded-md px-4 transition-all"
                }
              >
                {el.icon} <span>{el.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="w-full bg-white rounded-md py-3 flex items-center justify-center gap-3 text-lg cursor-pointer font-heading hover:bg-gray-200 font-medium transition-all hover:scale-95 text-teal-700">
          <MdLogout size={24} />
          <span>Logout</span>
        </button>
      </div>
    </section>
  );
}
