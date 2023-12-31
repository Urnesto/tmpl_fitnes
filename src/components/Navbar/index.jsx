import { useState } from "react";
import close from "../../assets/icons/close.svg";
import menu from "../../assets/icons/menu.svg";
import { Logo } from "../Reusable/logo";
import { Button } from "../Reusable/Button";
import useModal from "../../hooks/useModal";
import { Link } from "react-scroll";
import { navLinks } from "../../lib/navbarData";
import { numbersPhone } from "../../lib/navbarPhoneData";

const Navbar = ({ modalHandler }) => {
  const [isVisibleBurger, setVisibleBurger] = useState(false);
  const [isVisibleScroll, setVisibleScroll] = useState(true);

  const toggleScroll = (currentScroll) => {
    if (currentScroll) {
      document.body.style.overflow = "hidden";
      setVisibleScroll(!currentScroll);
    } else {
      document.body.style.overflow = "auto";
      setVisibleScroll(!currentScroll);
    }
  };

  const functionCollector = (isScroll) => {
    toggleScroll(isScroll);
    setVisibleBurger(!isVisibleBurger);
  };
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
              <Link
                activeClass="active"
                smooth={true}
                offset={50}
                duration={1500}
                to={nav.id}
              >
                <p>{nav.title}</p>
              </Link>
            </li>
          ))}
        </ul>
        <li className="font-medium list-none mx-10 cursor-pointer underline underline-offset-8 decoration-tmpl-purple text-base text-white hover:text-tmpl-purple">
          <a href="tel:+1-303-499-7111">Call for us</a>
        </li>
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={isVisibleBurger ? close : menu}
            alt="burger"
            className="w-6 h-6 object-contain"
            onClick={() => functionCollector(toggleScroll)}
          />
          {/* Sidebar */}
          <div
            className={`${
              !isVisibleBurger ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0  my-2 w-full sidebar bg-black h-full z-100`}
          >
            <ul className="list-none flex justify-start items-start flex-col h-[90%] ">
              {/* Nav's button searcher */}
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-normal  md:text-2xl sm:text-lg cursor-pointer
            hover:text-white text-gray-400 sm:my-4 md:my-5`}
                >
                  <Link
                    onClick={() => functionCollector()}
                    activeClass="active"
                    smooth={true}
                    offset={50}
                    duration={1500}
                    to={nav.id}
                  >
                    <p>{nav.title}</p>
                  </Link>
                </li>
              ))}

              {/* Phone searcher */}
              <ul className=" mt-auto w-full list-disc text-tmpl-purple list-inside">
                {numbersPhone.map((phone, index) => (
                  <li
                    key={phone.id}
                    className={`font-normal md:text-2xl sm:text-lg cursor-pointer
             `}
                  >
                    <a
                      href={`tel:number # ${phone.id}`}
                      className="hover:text-gray-400 text-white"
                    >
                      {phone.phone}
                    </a>
                  </li>
                ))}
                <ul className=" sm:mt-8 md:mt-8">
                  <li>
                    <a
                      href="https://yandex.ru/maps/213/moscow/?ll=37.731599%2C55.662936&mode=poi&poi%5Bpoint%5D=37.731344%2C55.663121&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D91033436195&z=19.52"
                      className="md:text-2xl sm:text-lg text-gray-400 hover:text-white sm:text-xs"
                    >
                      Our adres lorem ipum
                    </a>
                  </li>
                </ul>
                <div className="w-full mt-4 ">
                  <Button
                    handler={() => modalHandler("feedback")}
                    className
                    bg={"tmpl-purple"}
                  >
                    Left a request
                  </Button>
                </div>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
