import ActionTypes from './actionTypes';
import axios from 'axios';


export function demo01(data) {
    return {
        type: ActionTypes.HOME.DEMO01,
        data
    }
}

export function demo02(data) {
    return {type: ActionTypes.HOME.DEMO02, data}
}

export function demo03(data) {
    return {type: ActionTypes.HOME.DEMO03, data}
}

export function getInitHomeData() {
    return (dispatch) => {
        axios.get('api/002Home.json').then((res) => {
            const data = res.data.data;
            dispatch(demo01(data.topicList));
            dispatch(demo02(data.articleList));
            dispatch(demo03(data.recommendList));
        }).catch(() => {
            console.log("错无");
        })
    }
}

export function addMoreList(data) {
    return {
        type: ActionTypes.HOME.ADD_MORE_LIST,
        data
    }
}

export function changeScrollState (state) {
    return {type: ActionTypes.HOME.CHANGE_SCROLL_STATE, state}
}

export function getMoreList() {
    return (dispatch) => {
        axios.get('api/003Home.json').then((res) => {
            const data = res.data.data;
            dispatch(addMoreList(data))
        }).catch(() => {
            console.log("error");
        })
    }
}

