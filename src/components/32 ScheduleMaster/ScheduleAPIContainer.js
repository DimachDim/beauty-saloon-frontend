import React from "react";



//URLS


//КОМПАНЕНТЫ
import MonthBox from "./MonthBox";
import DatehBox from "./DateBox";




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


    //Трансформирует массив с датами в массив компанентов
    transformCalendar = (arrMonth) =>{

        return arrMonth.map(el => {

            return <MonthBox
                        key={el[0].getMonth()}
                        month={el[0].getMonth()}
                        year={el[0].getFullYear()}

                        dates={el.map(il => {
                            return <DatehBox
                                        key={Math.random()}
                                        fullData={il            /* полная дата */}
                                        user={this.props.user   /* данные пользователя */}

                                        navAC={this.props.navAC /* управление навигацией */}
                                        transferInfoDateAC={this.props.transferInfoDateAC   /* передает данные о дате в состояние */}
                                    />
                        })}
                    />
        })
    }


    


    render(){
        //console.log(this.props)
        
        
        return(
            <div>
                {/* МЕСЯЦА */}
                {this.transformCalendar(this.createCalendar(2))}
            </div>
        )      
        

    }
}


export default ScheduleAPIContainer;








