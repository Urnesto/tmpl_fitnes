import { Button } from "../Reusable/Button";
import { React } from "react";
import logonfs from "../../assets/images/logonfs.png";
import { sectionLinks } from "../../lib/sectionData";

const Section = ({ modalHandler }) => {
  const ButtonHandler = (condition) => {
    condition ? AbobnimentBuy(condition) : freeTrainigButton();
  };

  const AbobnimentBuy = (modalType) => {
    modalHandler(modalType);
  };

  const freeTrainigButton = () => {
    window.scroll({
      top: window.screen.height * 1.5,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div id="home" className=" w-full lg:w-8/12 h-fit my-10 max-w-7xl">
        <div className="grid lg:grid-cols-1 ">
          <div className="row-span-1 ">
            <h1 className="text-white my-3 uppercase text-center lg:text-start text-3xl lg:text-6xl font-bold">
              tmpl fitness
            </h1>
            <div className="uppercase e lg:text-3xl text-center lg:text-start text-tmpl-purple">
              Premium
              <p className="text-tmpl-gray-100 mx-2" href="#">
                fitness
              </p>
              <p href="#" className="text-white block">
                FREE TRIAL LESSON
              </p>
            </div>
          </div>
          <div className=" lg:row-span-2 lg:col-end-7 flex text-end ">
            <ul className=" lg:row-span-2  flex  flex-wrap float-left lg:items-end my-5 mx-10 m-auto  justify-center text-center lg:flex-col gap-3 lg:gap-5 ">
              {sectionLinks.map((sec, index) => (
                <ul
                  key={sec.id}
                  className="bg-gradient-to-br  from-tmpl-purple via-purple-900 to-black w-5/12 lg:w-fit p-0.5 rounded"
                >
                  <li
                    className="flex justify-center items-center w-full  h-12
                   text-white rounded text-center p-8 text-sm lg:text-xl bg-tmpl-gray-150"
                  >
                    <p>{sec.title}</p>
                  </li>
                </ul>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex gap-4 flex-col  xl:flex-row">
              <div className="flex items-center justify-center lg:mx-0 lg:my-10 mx-5 gap-4 lg:items-start lg:justify-normal">
                <Button
                  handler={() => ButtonHandler("feedback")}
                  bg={"tmpl-purple"}
                >
                  {" "}
                  buy a subscription{" "}
                </Button>
                <Button handler={() => ButtonHandler()} border={"2"}>
                  free trail lesson{" "}
                </Button>
              </div>
            </div>
            <div className="mx-5 lg:mx-0 flex items-center flex-row">
              <img className="w-14 h-14" src={logonfs} />
              <div className="text-tmpl-gray-100 text-sm flex flex-col my-3 lg:my-10 mx-3">
                <p>TMPL Fitness</p>
                <div className="flex flex-row">
                  <p>Enter &nbsp;</p>
                  <div className="underline pointer">
                    <a
                      href="https://commission.europa.eu/law/law-topic/data-protection/reform/what-constitutes-data-processing_en"
                      target="_blank"
                    >
                      National fitness community
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section;
