import { useState } from "react";
import close from "../../assets/icons/close.svg";
import menu from "../../assets/icons/menu.svg";
import logo from "../../assets/images/logo.svg";
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
      <nav className="w-11/12 lg:w-8/12  flex items-center justify-center py-6 navbar">
        <img src={logo} className="w-10 h-10" />
        <div className="mx-2 flex flex-col text-base text-white font-semibold">
          <a>TMPL</a>
          <a>FITNESS</a>
        </div>
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
        </ul>
        <li className="font-medium list-none mx-10 cursor-pointer underline underline-offset-8 decoration-tmpl-purple text-[16px] text-white hover:text-tmpl-purple">
          <a className="">Позвонить</a>
        </li>
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
                  className={`font-normal cursor-pointer text-[16px] 
            hover:text-white text-gray-400
               ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
