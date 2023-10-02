import { useState } from 'react'

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);
   
   //Types for TypeModal : {
    //* string: feedback || wantBuy
    //}
    const [TypeModal, setTypeModal] = useState('feedback')
    
    function toggle(){
        console.log('Успешно отработала');
        setIsShowing(!isShowing);
    }


    return [
        isShowing,
        toggle
    ];
}

export default useModal;