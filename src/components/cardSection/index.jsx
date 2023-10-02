import { React } from "react";
import { Button } from "../Reusable/Button";

const cardSection = () => {
  const cardData = [
    {
      id: "1",
      title: "DAY card",
      time: "c 7:00 до 17:00",
      subAdress: [
        "Консультация фитнес куратора",
        "Массаж шейно-воротниковой зоны",
        "Фитнес-тестирование",
        "Тренировка в тренажерном зале",
        "Гостевой визит",
        "Тренировка по групповой программе",
        "Гостевой визит (от покупки 6 месяцев)",
        "Тренировка единоборства",
        "Посещение зала с 7:00 до 17:00",
        "Заморозка 30 дней",
      ],
    },
    {
      id: "2",
      title: "DAY card",
      time: "c 7:00 до 17:00",
      subAdress: [
        "Консультация фитнес куратора",
        "Массаж шейно-воротниковой зоны",
        "Фитнес-тестирование",
        "Тренировка в тренажерном зале",
        "Гостевой визит",
        "Тренировка по групповой программе",
        "Гостевой визит (от покупки 6 месяцев)",
        "Тренировка единоборства",
        "Посещение зала с 7:00 до 17:00",
        "Заморозка 30 дней",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-7/12 h-fit ">
        {/*  */}

        {cardData.map((obj) => (
          <div
            key={obj.id}
            className="bg-gradient-to-br my-5 from-tmpl-purple via-purple-900 to-black w-full p-0.5 rounded-3xl"
          >
            <div className="w-full h-fit  flex  flex-col p-8 rounded-3xl bg-tmpl-black">
              <div className="flex  flex-col text-gray-400 ">
                <h1 className=" text-2xl lg:text-5xl">{obj.title}</h1>
                <span className="my-3 text-xl">{obj.time}</span>
              </div>
              {obj.subAdress && (
                <ul className="grid grid-cols-2 gap-4 content-start text-stast list-[square] list-inside text-xl text-gray-400 bg-tmpl-gray-150 rounded-xl p-8 my-10">
                  {obj.subAdress.map((hobby, hobbyIndex) => (
                    <li key={hobbyIndex}>
                      <a className="text-gray-400">{hobby}</a>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex items-center text-xl font-medium justify-center">
                <Button bg={"tmpl-purple"}>оставить заявку </Button>
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
