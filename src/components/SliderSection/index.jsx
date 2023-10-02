import { useState } from "react"
import PhotoCard from "../Reusable/PhotoCard"
import trainer from "../../assets/images/trainers/14.jpg";


const SliderSection = (props) => {

    const { data, btnhandler } = props

    return (
        <div className=" flex justify-center items-center   ">
            <div className="lg:w-7/12 w-10/12 h-fit flex justify-center items-center  sm:block ">
                <div className="lg:flex lg:flex-col lg:items-center lg:justify-center hidden ">
                <h1 className="text-5xl text-gray-600">Вас доведет до результата </h1>
                <span className="text-5xl text-tmpl-purple">команда профессионалов</span>
                <p className="text-lg text-gray-600 ml-8">Каждый является специалистом в своей сфере и имеет все необходимые документы</p>
                <div className="flex">
                {data.map((e, index) => (
                    <PhotoCard key={index} id={e.id} img={e.img} data={e} handler={btnhandler}  />
          ))}                        
                </div>
                </div>
            <div className="items-center justify-center lg:hidden">
                <div className="flex flex-col">
                {data.map((e, index) => (
                    <PhotoCard key={index} id={e.id} img={e.img} data={e} handler={btnhandler}  />
          ))}     
                </div>
              
            </div>
                
            </div>
        </div>
)}

export default SliderSection