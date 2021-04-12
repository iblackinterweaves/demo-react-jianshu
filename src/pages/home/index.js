import React, { Component } from 'react';
import { connect } from 'react-redux';

import Actions from '../../action/actionCreators';

import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';

import {
    HomeWrapper
    ,HomeLeft
    ,HomeTopImage
    ,HomeRight
    ,BackTop
} from './style';

class Home extends Component{


    componentWillMount() {
        this.props.initHomeData();
        this.bindEvent();
    }

    componentWillUnmount() {
        const { changeScrollTopShow } = this.props;
        window.removeEventListener('scroll', changeScrollTopShow);
    }

    handleScrollToTop= () => {
        window.scrollTo(0, 0);
    }

    bindEvent = () => {
        const { changeScrollTopShow } = this.props;
        window.addEventListener('scroll', changeScrollTopShow);
    }

    render() {

        const {
            showScroll
        } = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <HomeTopImage/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {

                    showScroll?(<BackTop onClick={this.handleScrollToTop}>顶部</BackTop>): null

                }
            </HomeWrapper>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        showScroll: state.HOME.showScroll
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initHomeData: () => {
            dispatch(Actions.HOME.getInitHomeData());
        },
        changeScrollTopShow: () => {
            const top = document.documentElement.scrollTop;
            if(top > 400){
                dispatch(Actions.HOME.changeScrollState(true));
            } else {
                dispatch(Actions.HOME.changeScrollState(false));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);