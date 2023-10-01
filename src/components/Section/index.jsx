import { Button } from "../Reusable/Button";
import { React } from "react";
import logonfs from "../../assets/images/logonfs.png";
import { Link, BrowserRouter } from "react-router-dom";

const sectionLinks = [
  {
    id: 0,
    title: "Тренажерный зал",
  },
  {
    id: 1,
    title: "Единоборства",
  },
  {
    id: 3,
    title: "Групповые программы",
  },
];
//test

const Section = ({props, toggleModal}) => {
  
  
  const ButtonHandler = (arg) =>{
    arg? AbobnimentBuy() : freeTrainigButton()  
  
  }

  const AbobnimentBuy = () =>{
    toggleModal();
  }

  const freeTrainigButton = () => {
    window.scroll({
      top: window.screen.height * 1.5,
      behavior: 'smooth',
    });
  };


  return (
    <div className="flex items-center justify-center">
      <div className=" w-full lg:w-8/12 h-fit my-10 max-w-7xl">
        <div className="grid lg:grid-cols-1 ">
          <div className="row-span-1 ">
            <h1 className="text-white my-3 uppercase text-center lg:text-start text-3xl lg:text-6xl font-bold">
              tmpl fitness
            </h1>
            <div className="uppercase e lg:text-3xl text-center lg:text-start text-tmpl-purple">
              Premium
              <a className="text-tmpl-gray-100 mx-2" href="#">фитнес в москве</a>
              <a  href="#" className="text-white block">БЕСПЛАТНОЕ ПРОБНОЕ ЗАНЯТИЕ</a>
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
                    <a>{sec.title}</a>
                  </li>
                </ul>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex gap-4 flex-col  xl:flex-row">
              <div className="flex items-center justify-center lg:mx-0 mx-5 gap-4 lg:items-start lg:justify-normal">
                <Button handler={()=>ButtonHandler('1')} bg={"tmpl-purple"}> купить абонемент </Button>
                <Button handler={()=> ButtonHandler()} border={"2"}>бесплатное занятие </Button>
              </div>
            </div>
            <div className="mx-5 lg:mx-0 flex items-center flex-row">
              <img className="w-14 h-14" src={logonfs}></img>
              <div className="text-tmpl-gray-100 text-sm flex flex-col my-3 lg:my-10 mx-3">
                <a>TMPL Fitness</a>
                <div className="flex flex-row">
                  <a>Вход &nbsp;</a>
                  <div className="underline pointer">
                    <BrowserRouter>
                      <Link to="https://nationalfitness.ru/" target="_blank">
                        Национальное фитнес-сообщество
                      </Link>
                    </BrowserRouter>
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
