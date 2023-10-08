import React from "react";
import './Form.css'
import { useNavigate } from "react-router-dom";
import BtnBack from "../../Other/BtnBack";
import HeadTable from "../../Other/HeadTable";

let DatePlanMaster = (props) => {
    //console.log(props)
    
    //Названия месяцов
    let monthName = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
    
    //Ссылка на инпут ввода времени
    let inpTime = React.createRef()
    
    //Объявляем элементы
    let butnComp            //кнопка закрытия
    let dateComp            //блок даты
    let timeComp            //блок времени
    let formComp            //блок формы

    let navigate = useNavigate();   //Навигация


    //КНОПКА ЗАКРЫТЬ РАЗДЕЛ ==================================================================
    butnComp = <BtnBack/>
       

    //ОБОЗНАЧЕНИЕ ДАТЫ ========================================================================
    
    //Если есть дата
    if(props.selectDate != undefined){
        dateComp = 
        <h1>
            {props.selectDate.getDate() + " " + monthName[props.selectDate.getMonth()] + ' ' + props.selectDate.getFullYear()}  
        </h1>
        
    //Если в состоянии нет даты
    }else{
        //Делаем шаг назад
        window.history.go(-1)
    }

    //ЗАПЛАНИРОВАННОЕ ВРЕМЯ ==================================================================
    timeComp = props.timeContainers

    //=============== ВЫЧИСЛЕНИЯ ДЛЯ ФОРМЫ =====================

    let arrIdSelect = []                                                    //Массив будет хранить id выбранных чекбоксов
    let arrCheckbox = document.getElementsByClassName('checbox-service')    //Получаем все чекбоксы

    //Трансформируем массив услуг в компаненты
    let transformArrServeces = props.serveces.map(el=>{
        
        //Если у специализации список услуг не пуст
        if(el.arrSelectServeces.length != 0){
            
            let uniqeClass = Math.random()                                      //Генерируем случайный класс
            let arrServecCheck = document.getElementsByClassName(uniqeClass)    //Получаем ссылку на все услуги в специализации
            
            //Нажатие накнопку выделить всё
            function checkAll(){
                
                //Если флажок не стоит
                if(!arrServecCheck[0].checked){

                    //Перебираем массив с чекбоксом услуг
                    for(let i=0; i<arrServecCheck.length; i++){
                        //Ставим флажок
                        arrServecCheck[i].checked = true
                    }

                //Если флажок стоит
                }else{
                    //Перебираем массив с чекбоксом услуг
                    for(let i=0; i<arrServecCheck.length; i++){
                        //Убираем флажок
                        arrServecCheck[i].checked = false
                    }
                }
                
                
            }
                        
            //преобразуем массив услуг в чекбоксы
            let services = el.arrSelectServeces.map(il=>{
                return (
                    <div key={il.id}>
                        <p>
                            <input 
                                type='checkbox' 
                                className={`checbox-service ${uniqeClass}`} 
                                id={il.service_id}
                                
                            />
                            {il.service_title}
                        </p>
                    </div>
                )
            })


            return (
                <div key={el.id} className="form-add-time_specialization-container">
                    <p>{el.title} <button onClick={()=>checkAll()}>...</button></p>
                    
                    <div>
                        {services}
                    </div>
                </div>
            )
        }
    })
    
    
    //Обработка формы перед отправкой
    function formProcesing(date, inpTime, arrCheckbox){

        let time = inpTime.current.value

        //Если указано время
        if(time != '' && time!= undefined){

            //Перебираем массив с чекбоксами
            for(let i=0; i<arrCheckbox.length; i++){
        
                //Если у чекбокса есть галочка
                if(arrCheckbox[i].checked){
                    //Добавляем его id в подготовленный массив
                    arrIdSelect.push(arrCheckbox[i].id)
                    //Убираем галочку
                    arrCheckbox[i].checked = false
                }
            }
            
            //Если хоть один чекбокс выбран
            if(arrIdSelect.length != 0){
                //Отправляем данные на сервер
                props.clickAddTime(date, time, arrIdSelect)
            }

            //Очищаем инпут с временем
            inpTime.current.value = ''
            //Очищаем массив c id чекбоксов
            arrIdSelect = []
        }
    }
    

    //=============== ВЫЧИСЛЕНИЯ ДЛЯ ФОРМЫ END =====================


    //ФОРМА ДОБАВЛЕНИЯ ВРЕМЕНИ  ==============================================================
    formComp = 
        <div className="form-add-time">
            <p>Создать окно для запси</p>
            <input type='time' ref={inpTime} min="09:00" max="18:00" id='form-add-time_inpyt-time'/>
            {transformArrServeces}
            <button onClick={()=>formProcesing(props.selectDate, inpTime, arrCheckbox)}>ДОБАВИТЬ</button>
        </div>

    

    
    
    

    return (
        <div>
            {/* КНОПКА ЗАКРЫТЬ РАЗДЕЛ */}
            {butnComp}

            {/* ОБОЗНАЧЕНИЕ ДАТЫ */}
            {dateComp}

            {/* ШАПКА ТАБЛИЦЫ */}
            <HeadTable
                arrNames={['Время', 'Услуга/Цена', 'Статус','Кто записан','']}
                arrGridTemplateColumns={['0.5fr','2fr','1fr','2fr','0.1fr']}
                childrenStyle={'time-conteiner-master'}
                headStyle={'head-table-time-box'}
            >
                {/* ЗАПЛАНИРОВАННОЕ ВРЕМЯ */}
                {timeComp}
            </HeadTable>
            

            {/* ФОРМА ДОБАВЛЕНИЯ ВРЕМЕНИ */}
            {formComp}

        </div>
    )    
    
}

export default DatePlanMaster;







