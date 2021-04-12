import ActionTypes from '../../../action/actionTypes';

const defaultState = {
    title: '',
    content: ''

}

const detail = (state = defaultState, action) => {
    return {
        title: changeTitleValue(state.title, action),
        content: changeContentValue(state.content, action)
    };
}

const changeTitleValue = (state, action) => {
    switch (action.type) {
        case ActionTypes.DETAIL.CHANGE_TITLE_VALUE:
            return action.value;
        default:
            return state;
    }
}

const changeContentValue = (state, action) => {
    switch (action.type) {
        case ActionTypes.DETAIL.CHANGE_CONTENT_VALUE:
            return action.value;
        default:
            return state;
    }
}

export default detail;