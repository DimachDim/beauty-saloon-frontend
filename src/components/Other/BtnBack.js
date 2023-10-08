import React from "react";
import './Style.css'



let BtnBack = (props) => {
    //console.log(props)
    
  

    return (
        <button 
            onClick={()=> window.history.go(-1)}
            className='btn-back'    
        >
            Назад
        </button>
    )
       
      
    
}

export default BtnBack;







