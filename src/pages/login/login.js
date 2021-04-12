import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Actions from '../../action/actionCreators';

import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';

class Login extends Component{
    render() {
        const {
            login
            ,loginState
        } = this.props;



        return !loginState? (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='账号' ref={(input)=> { this.account = input}}/>
                    <Input placeholder='密码' ref={(input)=> { this.password = input}} type='password'/>
                    <Button onClick={()=> {login(this.account, this.password)}}>登入</Button>
                </LoginBox>
            </LoginWrapper>
        ): (<Redirect to='/'/>);
    }
}

const mapStateToProps = (state) => {
    return {
        loginState: state.LOGIN.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (accountElm, passwordElm) => {
            dispatch(Actions.LOGIN.login(accountElm.value, passwordElm.value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);