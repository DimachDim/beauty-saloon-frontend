import React from "react";
import './Services.css'
import Service from "./Service";


let Specialization = (props) => {
    //console.log(props)
    
    let inpServiceName = React.createRef()

    //Будет хранить компаненты с услугами
    let services

    //Перебираем полученый массив услуг в компаненты
    services = props.services.map(el => {
        return <Service
                    key={el.id}
                    id={el.id}
                    title={el.title}

                    clickDelService={props.clickDelService          /* удаление услуги */}
                />
    })

    return (
        <div className="spesialization-service-container">
            {/* НАЗВАНИЕ СПЕЦИАЛИЗАЦИИ */}
            <h2>{props.title}</h2>
            
            {/* УСЛУГИ */}
            {services}

            {/* ФОРМА ДОБАВЛЕНИЯ */}
            <p>Назавание услуги</p>
            <input ref={inpServiceName}/>
            <button onClick={()=>props.clickAddService(inpServiceName, props.id)}>Добавить</button>
        </div>
    )    
    
}

export default Specialization;







