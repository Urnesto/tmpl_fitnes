import { useState } from "react";


const useTypeModal = () => {
   
   //Types for TypeModal : {
    //* string: feedback || wantBuy || signUpfree || undefined
    //}
    const [TypeModal, setTypeModal] = useState('feedback')
    
    function toggle(type){
       setTypeModal(type)
    }


    return [
        TypeModal,
        toggle
    ];
}

export default useTypeModal;