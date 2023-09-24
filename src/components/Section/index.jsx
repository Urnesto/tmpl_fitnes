import { Button } from "../Reusable/Button";

const Section = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" w-10/12 lg:w-8/12 h-fit my-10">
        <h1 className="text-white my-3 uppercase text-center lg:text-start text-3xl lg:text-6xl font-bold">
          tmpl fitness
        </h1>
        <div className="uppercase text-base lg:text-3xl text-center lg:text-start text-tmpl-purple">
          Premium
          <a className="text-tmpl-gray-100  mx-2">фитнес в москве</a>
          <a className="text-white block">БЕСПЛАТНОЕ ПРОБНОЕ ЗАНЯТИЕ</a>
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <Button btnText={"купить абонемент"} bg={"tmpl-purple"} />
          <Button btnText={"купить абонемент"} border={"2"} />
        </div>
      </div>
    </div>
  );
};
export default Section;
