import { React } from "react";
import { Button } from "../Reusable/Button";

const cardSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-10/12 h-fit bg-red-700">
        <div className="w-full h-full  bg-gray-200">
          <ul className="m-10">
            <h1 className="text-white text-4xl">Just Card</h1>
            <div className="m-10 bg-gray-800">
              <ul className="grid grid-cols-2">
                <li>aaaa</li>
                <li>aaaa</li>
                <li>aaaa</li>
                <li>aaaa</li>
                <li>aaaa</li>
                <li>aaaa</li>
                <li>aaaa</li>
                <li>aaaa</li>
              </ul>
            </div>
          </ul>
        </div>
        <Button bg={"tmpl-purple"} src={"dima"} />
      </div>
    </div>
  );
};
export default cardSection;
