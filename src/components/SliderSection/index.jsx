import { useState } from "react"
import PhotoCard from "../Reusable/PhotoCard"




const SliderSection = () => {

    return (
        <div className=" flex  justify-center items-center ">
            <div className="w-7/12 h-fit flex bg-white-400  justify-center items-center ">
                <div className="flex flex-col items-center justify-center  ">
                <h1 className="text-5xl text-gray-600">Вас доведет до результата </h1>
                <span className="text-6xl text-tmpl-purple">команда профессионалов</span>
                <p className="text-lg text-gray-600 ml-8">Каждый является специалистом в своей сфере и имеет все необходимые документы</p>
                <div className="flex">
                    <PhotoCard />
                    <PhotoCard />
                    <PhotoCard />
                </div>
                </div>
                
            </div>
        </div>
)}

export default SliderSection