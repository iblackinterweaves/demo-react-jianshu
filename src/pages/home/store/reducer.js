import ActionTypes from '../../../action/actionTypes'

const defaultState = {
    topicList: []
    ,articleList: []
    ,recommendList: []
    ,showScroll: true
}

const home = (state = defaultState, action) => {
    return {
        topicList: demo01(state.topicList, action)
        , articleList: demo02(state.articleList, action)
        , recommendList: demo03(state.recommendList, action)
        , showScroll: changeScrollState(state.showScroll, action)
    }
}

const changeScrollState = (state, action) => {
    switch (action.type) {
        case ActionTypes.HOME.CHANGE_SCROLL_STATE:
            return action.state;
        default:
            return state
    }
}

const demo01 = (state, action) => {
    switch (action.type) {
        case ActionTypes.HOME.DEMO01:
            return action.data;
        default:
            return state
    }
}

const demo02 = (state, action) => {
    switch (action.type) {
        case ActionTypes.HOME.DEMO02:
            return action.data;
        case ActionTypes.HOME.ADD_MORE_LIST:
            return state.concat(action.data);
        default:
            return state;
    }
}

const demo03 = (state, action) => {
    switch (action.type) {
        case ActionTypes.HOME.DEMO03:
            return action.data;
        default:
            return state;
    }
}




export default home;