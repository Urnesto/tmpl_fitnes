import { Button } from "../Button"


const PhotoCard = (props) => {
     const {img,  handler, data}  = props
    return (
        <div className=" lg:w-8/12 lg:h-3/4 lg:mx-4 lg:mt-10 w-full ">
              <div className="w-full h-full ">
                    <div className="w-full  h-full bg-gradient-to-br my-5 from-tmpl-purple via-purple-900 to-blackl p-0.5 rounded-3xl">
                    <img src={img} alt="" className="w-full rounded-2xl"  />
                    <div className="float-right mb-10 h-4">
                        <button onClick={()=>handler(data)} className=" w-8 h-8 bg-gradient-to-br  from-tmpl-purple via-purple-900 to-blackl text-white rounded-3xl font-normal">{'>'}</button>
                    </div>
                    </div>
                </div>      
        </div>
    )
}

export default PhotoCard