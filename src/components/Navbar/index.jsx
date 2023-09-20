import { useState } from "react";
import close from "../../assets/icons/close.svg";
import menu from "../../assets/icons/menu.svg";
import logo from "../../assets/icons/logo192.png";
export const navLinks = [
  {
    id: "home",
    title: "Главная",
  },
  {
    id: "about",
    title: "O фитнес клубе",
  },
  {
    id: "product",
    title: "Услуги",
  },
  {
    id: "schedule",
    title: "Расписание",
  },
  {
    id: "payment",
    title: "Стоимость",
  },
  {
    id: "mobile_app",
    title: "Мобильное приложение",
  },
  {
    id: "contact",
    title: "Контакты",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <nav className="w-8/12  flex items-center justify-center py-6 navbar">
        <img src={logo} className="w-10 h-10" />
        <h1 className="text-3xl text-gray-400">Logo</h1>
        {/* Desktop Navigation */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-normal cursor-pointer text-[16px] 
            hover:text-white text-gray-400
               ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className="font-medium mx-10 cursor-pointer text-[16px] text-gray-400 hover:text-white">
            <a>Позвонить</a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          {/* Sidebar */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={` font-medium cursor-pointer text-[16px] 
                  hover:text-white text-gray-400 ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  }`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className="font-medium  cursor-pointer text-[16px] text-gray-400 hover:text-white">
                <a>Позвонить</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
