import React from "react";

import Profile from "./ProfileNav";
import requestFunc from "../../js/requestFunc";



class ProfileAPIContainer extends React.Component{

    componentDidMount(){
        
    }

    

    render(){
        //console.log(this.props)
        
        return  <Profile
                    info={this.props.user               /* данные о пользователе */}

                    navAC={this.props.navAC             /* навигация */}
                />      
    }
}


export default ProfileAPIContainer;








