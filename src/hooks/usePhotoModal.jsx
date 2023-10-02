import { useState } from 'react'

const usePhotoModal = () => {
    const [isShowing, setIsShowing] = useState(false);
   

    function toggle(){
        if(isShowing){
            document.body.style.overflow = "auto";
            setIsShowing(!isShowing);
        }else{
            document.body.style.overflow = "hidden";
            setIsShowing(!isShowing)
        }
        
    }


    return [
        isShowing,
        toggle
    ];
}

export default usePhotoModal;