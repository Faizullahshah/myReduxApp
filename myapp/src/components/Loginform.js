
import React, {Component} from "react";
import {Card , CardSection, Input, CustomButton} from "./common";
import { conncet } from "react-redux";


class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    render(){
        // export desemialChanage
        return(
            <Card>
                <CardSection>
                    <Input label="Email" placeholder="user@gmail.com"/>
                </CardSection>
                <CardSection>
                    <Input
                    secureTextEntry
                    placeholder="password"
                    label="Password"
                   />
                </CardSection>

                <CardSection>   
                     <CustomButton onChangetext= {this.onEmailChange.bind(this)}>
                    Sign In
                    </CustomButton>
                </CardSection>     
            </Card>
        );
    }
}


export default connect (null, emailChanged) (LoginForm);

