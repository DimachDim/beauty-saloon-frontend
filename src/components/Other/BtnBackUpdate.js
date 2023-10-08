import React from "react";



let BtnBackUpdate = (props) => {
    //console.log(props)
    
  

    return (

        <button 
            onClick={()=> {
                window.location.reload()
                window.history.go(-1); 
            }}
        >
        Назад
        </button>
        
    )
      
    
}

export default BtnBackUpdate;







