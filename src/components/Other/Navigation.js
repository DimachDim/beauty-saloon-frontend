import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



let Navigation = (props) => {
    //console.log(props)

    let nav = useNavigate()
    
    useEffect(()=>{
        nav(props.path)
    })

      
    
}

export default Navigation;







