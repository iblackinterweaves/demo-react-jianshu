import axios from 'axios';
import ActionTypes from '../../../action/actionTypes';

export function changeLoginState(state) {
    return {type: ActionTypes.LOGIN.CHANGE_LOGIN_STATE, state}
}

export function login(aut, pwd) {
    return (dispatch) => {
        axios.get('/api/005Login.json?aut=' + aut + '&pwd=' + pwd).then((res) => {
            const data = res.data;
            dispatch(changeLoginState(data? true: false));
        }).catch(() => {
            console.log("errorLogin");
        });

        console.log(aut, pwd);
    }
}