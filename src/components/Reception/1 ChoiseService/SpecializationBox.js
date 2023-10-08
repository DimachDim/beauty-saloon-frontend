import React from "react";
import { useNavigate} from 'react-router-dom'


let SpecializationBox = (props) => {
    //console.log(props)
    let nav = useNavigate()
    
    //Трансформируем массив с услугами
    function transformArr(arr=props.arrService){
        return arr.map(el=>{
            return(
                <div key={el.id}>
                    <input 
                        type='checkbox' 
                        onChange={()=>{
                            props.sendIdServiceAPI(el.id)
                            nav('/reception/shedule')
                        }}/>

                    {el.title}
                </div>
                
            ) 
        })
    }
    
    return (
        <div className="specialization-box">
            {/* ЗАГОЛОВОК */}
            <h3>{props.title}</h3>

            {/* СПИСОК УСЛУГ */}
            {transformArr()}
        </div>
    )    
    
}

export default SpecializationBox;







