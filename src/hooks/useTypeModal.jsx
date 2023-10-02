import { useState } from "react";


const useTypeModal = () => {
   
   //Types for TypeModal : {
    //* string: feedback || wantBuy
    //}
    const [TypeModal, setTypeModal] = useState('feedback')
    
    function toggle(arg="feedback"){
        console.log('Успешно отработала');
       setTypeModal(arg)
    }


    return [
        TypeModal,
        toggle
    ];
}

export default useTypeModal;