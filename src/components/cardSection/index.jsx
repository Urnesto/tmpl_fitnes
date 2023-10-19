import { React } from "react";
import { Button } from "../Reusable/Button";
import leftIcon from "../../assets/icons/leftIcon.svg";
import rightIcon from "../../assets/icons/rightIcon.svg";
const cardSection = ({ dataCard, btnhandler, modalHandler }) => {
  return (
    <div id="pricing" className="flex flex-col items-center justify-center">
      <div className="w-full relative lg:w-7/12 h-fit ">
        <button
          className="absolute w-10 h-10 left-0 top-1/2  "
          onClick={() => btnhandler()}
        >
          <img src={leftIcon} alt="left"></img>
        </button>
        <button
          className="absolute w-10 h-10  right-0 top-1/2 "
          onClick={() => btnhandler("next")}
        >
          <img src={rightIcon} alt="right"></img>
        </button>
        {dataCard.map((obj) => (
          <div
            data={obj}
            id={obj.id}
            key={obj.id}
            className="bg-gradient-to-br my-5 from-tmpl-purple via-purple-900 to-black w-full p-0.5 rounded-3xl"
          >
            <div className="w-full h-fit  flex  flex-col p-4 lg:p-8 rounded-3xl bg-tmpl-black">
              <div className="flex  flex-col text-gray-400 ">
                <h1 className=" text-xl md:text-2xl lg:text-5xl">
                  {obj.title}
                </h1>
                <span className="my-3 text-xl">{obj.time}</span>
              </div>
              {obj.subAdress && (
                <ul className="grid mx-5 lg:mx-2 lg:grid-cols-2 gap-3  text-start list-[square] list-inside text-sm md:text-lg xl:text-xl text-tmpl-purple bg-tmpl-gray-150 rounded-xl p-4 lg:p-8 my-5 lg:my-10">
                  {obj.subAdress.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <span className="text-gray-400">{subItem}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-col lg:flex-row items-center justify-between text-md lg:text-xl font-medium ">
                <p className="text-white text-xl lg:text-3xl text-center ">
                  {obj.price}
                </p>
                <Button
                  handler={() => modalHandler(obj.title)}
                  bg={"tmpl-purple"}
                >
                  {}
                  leave a request{" "}
                </Button>
              </div>
            </div>
          </div>
        ))}
        {/*  */}
      </div>
    </div>
  );
};
export default cardSection;
