import React from "react";
import requestFunc from "../../../js/requestFunc";
import './Style.css'

//URLS
import { ADD_SPECIALIZATION_URL } from "../../../Paths/boss/BossSetting";
import { GET_SPECIALIZATION_URL } from "../../../Paths/boss/BossSetting";
import { DEL_SPECIALIZATION_URL } from "../../../Paths/boss/BossSetting";

//КОМПАНЕНТЫ
import BtnBack from '../../Other/BtnBack'


class SpecializationsAPIContainer extends React.Component{

    componentDidMount(){
        this.getDataSpecializationAPI()
    }

    //Запрос специализаций с сервера
    getDataSpecializationAPI = async (SID=this.props.SID)=>{

        //Запрашиваем у сервера данные
        let serverAnswer = await requestFunc(GET_SPECIALIZATION_URL, SID)
        
        //Есди данные пришли
        if(serverAnswer.data != undefined){
            //Передаем данные в состояние
            this.props.transferDataSpecializationAC(serverAnswer.data)
        }else{
            console.log('Ошибка')
        }
    }


    //Создание специализации
    clickAddSpecializationsAPI = async (name, SID=this.props.SID) =>{

        //Содержимое поля
        let value = name.current.value

        //Если содержимое не пустое
        if(value != ''){

            //Отправляем данные на сервер
            await requestFunc(ADD_SPECIALIZATION_URL, {value, SID})
            //Запрашиваем и обнавляем стор
            this.getDataSpecializationAPI()
            //Очищаем поле
            name.current.value = null
        }

    }
    

    //Трансформирует массив в компаненты
    transformDataSpec = (arr) =>{
        return arr.map(el => {
            return (
                <div key={el.id} className="sitting-specialization_spec-container">
                    {/* Название */}
                    {el.title}

                    {/* Кнопка удаления */}
                    <button onClick={()=>this.popUpClick(el.id)}>X</button>
                </div>
            )
        })
    }


    //Удаление специализации
    delSpecializationAPI = async (id, SID=this.props.SID)=>{
        
        //Отправляем данные на сервер
        requestFunc(DEL_SPECIALIZATION_URL, {id,SID})
        //Обнавляем данные и состояние
        this.getDataSpecializationAPI()
    }


    //Вызов модального окна
    popUpClick(arg){
        
        //Передаем: активация окна, текст сообщения, текст кнопки отмены, текст кнопки подтверждения, функцию, аргументы
        this.props.dataPopUpAC(
            true, 
            'ВНИМАНИЕ! При удалении специализации удалятся все связанные с ней услуги', 
            'Отмена', 
            'Удалить', 
            this.delSpecializationAPI, 
            arg
        )
        
    }


    render(){
        //console.log(this.props)
        
        let inpNameSpec = React.createRef();

        
        

        return(
            <>
                {/* КНОПКА НАЗАД */}
                <BtnBack/>

                {/* СПИСОК СПЕЦИАЛИЗАЦИЙ */}
                <h1>Создайте специализации</h1>
                {this.transformDataSpec( this.props.specializations)                /*Специализации*/}

                {/* ФОРМА ДОБАВЛЕНИЯ СПЕЦИАЛИЗАЦИИ */}

                <div className="sitting-specialization_form">
                        <p>Название специализации</p>
                        <input ref={inpNameSpec}/>
                        <button onClick={() => this.clickAddSpecializationsAPI(inpNameSpec)}>Добавить</button>
                </div>
            </>
        )      
    }
}


export default SpecializationsAPIContainer;








