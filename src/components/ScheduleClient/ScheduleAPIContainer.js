import React from "react";



//URLS


//КОМПАНЕНТЫ
import MonthBox from "./MonthBox";
import DatehBox from "./DateBox";
import DatePlanContainer from "../DatePlanMaster/DatePlanContainer";



class ScheduleAPIContainer extends React.Component{

    componentDidMount(){
        
    }

    //Возвращает массив с массивами (каждый массив второго уровня это месяц по числам).
    // Принимает число, оно указывает на сколько месяцев вперед сформировать массик
    createCalendar = (colMonth)=>{

        let year = new Date().getFullYear()             //Текущий год
        let month = new Date().getMonth()               //Текущий месяц 
        let date = new Date().getDate()                 //Текущая дата

        let arrMonth = new Array()                      //Будет хранить массивы с датами

        //Добавляем пустые массивы в главный массив. В зависимости от указанного числа
        for(let i=0; i<colMonth; i++){
            arrMonth.push([])
        }

        //Перебираем главный массив
        for(let i=0; i< arrMonth.length; i++){
            //Наполняем каждый месяц
            for(let j=1; j<40; j++){
                //Наполняем месяца
                arrMonth[i].push(new Date(year, month, j))

                //Показываем момент с которого можно смотреть условия
                if(j>27){
                    //Если текущая этерируемая дата меньше предыдущей
                    if(arrMonth[i][j-1].getDate() < arrMonth[i][j-2].getDate()){
                        //Удаляем последний элемент
                        arrMonth[i].pop()
                        //Покидаем текущий цикл
                        break
                    }
                }
            }

            //Увеличиваем месяц
            month = month+1
        }


        return arrMonth
    }    


    //Трансформирует массив с датами в массив компанентов. ВЕТКА выбора УСЛУГИ
    transformCalendar = (arrMonth) =>{
        

        let arrFreeDates = this.props.arrFreeDates      //Ссылка на масив свободных дат

        return arrMonth.map(el => {
            
            return <MonthBox
                        key={el[0].getMonth()}
                        month={el[0].getMonth()}
                        year={el[0].getFullYear()}

                        dates={el.map(il => {
                            
                            let flagFree        //Будет показывать свободна дата или нет
                            
                            //Перебираем массив свободных дат
                            for(let i=0;i< arrFreeDates.length; i++){
                                //Если даты равны, мксяца, года равны
                                if(arrFreeDates[i].date == il.getDate() && 
                                arrFreeDates[i].month == il.getMonth() && 
                                arrFreeDates[i].year == il.getFullYear()){
                                    
                                    //Ставим флаг что дата свободна
                                    flagFree = true
                                    
                                }
                            }

                            return <DatehBox
                                        key={Math.random()}
                                        fullData={il            /* полная дата */}
                                        flagFree={flagFree      /* флаг на свободную дату */            }
                                        branch={'service'       /* ветка выбора */}

                                        transferInfoDateAC={this.props.transferInfoDateAC   /* передает данные о дате в состояние */}
                                        
                                    />
                        })}
                    />
        })
    }


    //Трансформирует массив с датами в массив компанентов. ВЕТКА выбора МАСТЕРА
    transformCalendarForMaster = (arrMonth) =>{

        let arrDataForCalendar = this.props.arrDataForCalendar  //Данные где есть свободные окна а где нет

        return arrMonth.map(el => {

            return <MonthBox
                        key={el[0].getMonth()}
                        month={el[0].getMonth()}
                        year={el[0].getFullYear()}

                        dates={el.map(il => {
                            
                            //Дата из il
                            let year = il.getFullYear()
                            let month = il.getMonth()
                            let date = il.getDate()
                            //Флаг свободности окон
                            let flagFree

                            //Перебираем массив инфо о свободности окон
                            for(let i=0; i<arrDataForCalendar.length; i++){
                                //Если дата il равна  дате из массива
                                if(year==arrDataForCalendar[i].year && month==arrDataForCalendar[i].month && date==arrDataForCalendar[i].date){
                                    //Смотрим флаг и присваиваем
                                    flagFree = arrDataForCalendar[i].statusFree
                                }
                            }

                            return <DatehBox
                                        key={Math.random()}
                                        fullData={il            /* полная дата */}
                                        flagFree={flagFree}
                                        branch={'master'        /* ветка выбора */}

                                        transferInfoDateAC={this.props.transferInfoDateAC   /* передает данные о дате в состояние */}
                                        
                                    />
                        })}
                    />
        })
    }


    render(){
        //console.log(this.props)
        
        //Проверяем данные о свободных датах
        switch(true){
            //Если там есть данные о свободных окнах для услги и нет данных ветки выбора мастера
            case this.props.arrFreeDates.length != 0 && this.props.arrDataForCalendar.length ==0:{
                return(
                    <>
                        {/* МЕСЯЦА */}
                        {this.transformCalendar(this.createCalendar(2))}
                    </>
                )  
            }

            //Если есть данные о свободных окнах у мастера
            case this.props.arrDataForCalendar.length != 0:{
                return(
                    <>
                        {/* МЕСЯЦА */}
                        {this.transformCalendarForMaster(this.createCalendar(2))}
                    </>
                )
            }

            //Есди нет данных
            default:{
                return(
                    <>
                        Нет свободных окон
                    </>
                )
            }
        }

           
        

    }
}


export default ScheduleAPIContainer;








