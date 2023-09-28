import { React } from "react";
const children = "sasasasasadad";
const FreeSection = ({ children }) => {
  return (
    <div className="flex items-center justify-center my-20 ">
      <div className="flex flex-col  items-center font-light">
        <h1 className="text-tmpl-purple  text-5xl">Бесплатное занятие</h1>
        <p className="text-gray-400  text-3xl">подарок от нашего клуба</p>
        <div className="w-9/12 flex flex-eow">
          <div className="bg-slate-600 hidden lg:block text-5xl">
            <p>Вы сможете устроить настоящий</p>
            <p className="text-tmpl-purple">тест-драйв клуба</p>
          </div>
          <div className="w-1/2 flex flex-col items-start  bg-slate-500">
            <div className="relative ">
              <div className="absolute inset-0 bg-tmpl-purple blur-xl  rounded-full z-0"></div>
              <div className="relative flex justify-center items-center w-32 h-32 z-10">
                <p className="text-white text-5xl">1</p>
              </div>
            </div>
            <div className="block">Посмотреть одними из первых клуб внутри</div>
            <div className="relative ">
              <div className="absolute inset-0 bg-tmpl-purple blur-xl  rounded-full z-0"></div>
              <div className="relative flex justify-center items-center w-32 h-32 z-10">
                <p className="text-white text-5xl">2</p>
              </div>
            </div>
            <div>Позаниматься на новейших тренажерах</div>
            <div className="relative ">
              <div className="absolute inset-0 bg-tmpl-purple blur-xl  rounded-full z-0"></div>
              <div className="relative flex justify-center items-center w-32 h-32 z-10">
                <p className="text-white text-5xl">3</p>
              </div>
            </div>
            <div>Насладиться качественным сервисом</div>
            <div className="relative ">
              <div className="absolute inset-0 bg-tmpl-purple blur-xl  rounded-full z-0"></div>
              <div className="relative flex justify-center items-center w-32 h-32 z-10">
                <p className="text-white text-5xl">4</p>
              </div>
            </div>
            <div>
              У вас появится возможность пользоваться всеми услугами клуба
              абсолютно бесплатно
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FreeSection;
