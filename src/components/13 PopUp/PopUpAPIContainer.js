import React from "react";
import './PopUp.css'
//URLS


//КОМПАНЕНТЫ




class PopUpAPIContainer extends React.Component{

    componentDidMount(){
    }

    //Закрытие окна
    closePopUp(){
        this.props.dataPopUpAC(false, undefined, undefined, undefined, undefined, undefined)
    }
    
    okPopUp(){

        let func = this.props.popUp.func        //Функция
        let arg = this.props.popUp.dataFunc     //Аргументы


        //Вызываем переданую функцию и передаем аргумент
        func(arg)
        //Закрываем окно
        this.closePopUp()
        //Обнавляем страницу
        window.location.reload()
    }

    render(){
        //console.log(this.props)
        
        

        switch(this.props.popUp.active){
            case true:{
                return(
                    <div className="pop-up-display">
                        <div className="pop-up-container">

                                {/* КНОПКА ЗАКРЫТИЯ */}
                                <button  onClick={()=> this.closePopUp()}>X</button>

                                {/* ТЕКСТ */}
                                <p>{this.props.popUp.text}</p>

                                {/* КНОПКА ОТМЕНЫ */}
                                <button onClick={()=> this.closePopUp()}>{this.props.popUp.closeText}</button>

                                {/* КНОПКА ПОДТВЕРДИТЬ */}
                                <button onClick={()=> this.okPopUp()}>{this.props.popUp.okText}</button>

                        </div>
                    </div>

                )
            }
        }

             
    }
}


export default PopUpAPIContainer;








