import React from "react";



let SpecializationBox = (props) => {
    console.log(props)
    
    let selectRef = React.createRef()           //Сылка на select
    let inpPriceRef = React.createRef()         //Ссылка на поле с ценой
    let idService = undefined                   //Следит какой элемент выбран


    //Трансформирует массив для выбранных услуг
    let transArrSelectServ = props.arrSelectServeces.map(el => {
        return (
            <div key={el.id} className='spec-box_service-container'>
                <div>{el.service_title}</div>
                <div>
                    {el.price} руб.
                </div>
                <button onClick={() => props.delSrviceForMasterAPI(el.id)}>X</button>
            </div>
        )
    })


    //Трансформирует массив невыбранных услуг для формы
    let transArrForForm = props.arrAvailabelServeces.map(el=>{
        return (
            <option key={el.id} value={el.id}>{el.title}</option>
        )
    })

    
    //Обработка нажатия на кнопук добавить
    let clickBtnAddServ = (id, inpPrice)=>{
        //Вытаскиваем цену
        let price = inpPrice.current.value

        //Если поля не пусты
        if(id!=undefined && price!=''){
            //Отправляем данные на сервер
            props.addSrviceForMasterAPI(id, price)
            //Очищаем поле
            inpPrice.current.value = ''
        }
    }

    return (
        <div className="settings-master_spec-box">

            {/* ЗАГОЛОВОК */}
            <h3>{props.titleSpec}</h3>

            {/* СПИСОК ВЫБРАННЫХ УСЛУГ */}
            {transArrSelectServ}

            {/* ФОРМА */}
            {/* если выбраны еще не все услуги */}
            {props.arrAvailabelServeces.length != 0 
                ? 
                    <div className="spec-box_form">
                        <select ref={selectRef} onChange={e => idService = e.target.value}>
                            <option></option>
                            {transArrForForm}
                        </select>
                        <input type='number' placeholder='цена в РУБ' ref={inpPriceRef}/>
                        <button onClick={() => clickBtnAddServ(idService, inpPriceRef)}>Добавить</button>
                    </div>
                :''
            }

        </div>
    )    
    
}

export default SpecializationBox;







