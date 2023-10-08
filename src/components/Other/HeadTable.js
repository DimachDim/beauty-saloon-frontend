import React from "react";



let HeadTable = (props) => {
    //console.log(props)
    
    let gridTemplateColumns = ''        //Количество колон с фракциями
    let arrCompNames                    //Массив компанентов
    let styleMain                       //Стиль для главного контейнера
    let headStyle = props.headStyle     //Стиль шапки

    //Вычисляем стиль для грид
    props.arrGridTemplateColumns.map(el=>{
        gridTemplateColumns = gridTemplateColumns + ' ' + el
    })

    //Заполняем массив компанентами
    arrCompNames = props.arrNames.map(el=>{
        return (
            <div key={Math.random()}>
                {el}
            </div>
        )
    })

    //Формируем стиль для главного контейнера
    styleMain ={
        display: 'grid',
        gridTemplateColumns: gridTemplateColumns
    }
    
    //Обарачиваем элементы которые пришли в div с нужным классом
    let wraper = props.children.map(el=>{
        return <div key={Math.random()} className={props.childrenStyle} style={styleMain}>{el}</div>
    })

    return (
        <div>
            {/* ШАПКА */}
            <div style={styleMain} className={headStyle}>
                {arrCompNames}
            </div>

            {/* СОДЕРЖИМОЕ */}
            <div>
                {wraper}
            </div>
        </div>
    )
       
      
    
}

export default HeadTable;







