import React from "react";
import requestFunc from "../../../js/requestFunc";

//URLS
import { LOGOUT_URL } from "../../../Paths/Aut";

//КОМПАНЕНТЫ
import Logout from "./Logout";



class LogoutAPIContainer extends React.Component{

    componentDidMount(){
    }

   
    clickLogout = async (SID=this.props.SID) => {

        //Удаляем куки
        document.cookie = 'SID=;max-age=-1'
        
        //Делаем запрос на сервер
        let serverAnswer = await requestFunc(LOGOUT_URL, SID)
        
        //обнавляем страницу
        window.location.reload()
        window.location ='/'
    }
    
    

    render(){
        //console.log(this.props)
        
        return (
            <>
                <Logout
                    clickLogout={this.clickLogout           /* обработка клика выйхода */}
                />
                
                
            </>
        )
    }
}


export default LogoutAPIContainer;








