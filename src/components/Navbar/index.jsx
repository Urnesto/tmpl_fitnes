import { useState } from "react";
import close from "../../assets/icons/close.svg";
import menu from "../../assets/icons/menu.svg";
<<<<<<< HEAD
import { Logo } from "../Reusable/logo";
 const navLinks = [
=======
import logo from "../../assets/images/logo.svg";

const navLinks = [
>>>>>>> 07958a9800266931cfb5fcc2f5960ecc40f346d6
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
        <Logo size={'w-10 h-10'} />
      
        {/* Desktop Navigation */}
        <ul className="list-none  lg:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-normal cursor-pointer text-base 
            hover:text-white text-gray-400
               ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <li className="font-medium list-none mx-10 cursor-pointer underline underline-offset-8 decoration-tmpl-purple text-base text-white hover:text-tmpl-purple">
          <a className="">Позвонить</a>
        </li>
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-6 h-6 object-contain"
            onClick={() => setToggle(!toggle)}
          />

          {/* Sidebar */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-28 rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-normal cursor-pointer text-base
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
