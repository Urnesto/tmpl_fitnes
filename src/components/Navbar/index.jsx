import { useState } from "react";
import close from "../../assets/icons/close.svg";
import menu from "../../assets/icons/menu.svg";
import { Logo } from "../Reusable/logo";
import { Button } from "../Reusable/Button";

const navLinks = [
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
    id: "pricing",
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

const numbersPhone = [
  {
    id: 0,
    phone:"8 499 322 07 55"
  },
  {
    id:1,
    phone:"8 499 322 07 75"
  }
]

const Navbar = () => {
  const [isVisibleBurger, setVisibleBurger] = useState(false);
  const [isVisibleScroll, setVisibleScroll] = useState(true);
  const toggleScroll = (currentScroll) => {
    if(currentScroll){
      document.body.style.overflow = "hidden";
      setVisibleScroll(!currentScroll)
    } else {   
      document.body.style.overflow = "auto";
      setVisibleScroll(!currentScroll)
    }
  }


  const functionCollector = (scroll) =>{
    toggleScroll(scroll)
    setVisibleBurger(!isVisibleBurger)
  }


  return (
    <div className="flex items-center justify-center">
      <nav className="w-11/12 lg:w-8/12 max-w-7xl flex items-center justify-center py-6 navbar">
        <Logo size={"w-10 h-10"} />

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
            src={isVisibleBurger ? close : menu}
            className="w-6 h-6 object-contain"
            onClick={() => functionCollector(isVisibleScroll)}
          />

          {/* Sidebar */}
          <div
            className={`${
              !isVisibleBurger ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-full rounded-xl sidebar bg-black h-screen`}
          >
            <ul className="list-none flex justify-start  items-start flex-col mx-12 ">
             {/* Nav's button searcher */}
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-normal text-lg cursor-pointer
            hover:text-white text-gray-400`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              {/* Phone searcher */}
              <div className="justify-end items-end flex-1 "> 
              {numbersPhone.map((phone, index) => (
                <li
                  key={phone.id}
                  className={`font-normal text-lg cursor-pointer
            hover:text-white text-tmpl-purple list-disc list-inside`}
                >
                  <a href={`tel:number #${phone.id} `}>{phone.phone}</a>
                </li>
              ))}
              </div>
              <Button bg={'tmpl-purple'}>Оставить заявку</Button>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
