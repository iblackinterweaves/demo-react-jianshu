import ActionTypes from '../../../action/actionTypes';


const defaultState = {
    login: false
}

const reducer =  (state = defaultState, action) => {
    return {
        login: changeLoginState(state.login, action)
    };
}

const changeLoginState = (state, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN.CHANGE_LOGIN_STATE:
            return action.state;
        default:
            return state;
    }
}

export default reducer;

