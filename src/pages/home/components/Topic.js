import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    TopicWrapper
    ,TopicImg
    ,TopicItem
} from '../style';

class Topic extends Component{

    render() {
        const {
            topicList
        } = this.props;
        return (
            <TopicWrapper>
                {
                     topicList.map((item) => (
                            <TopicItem key={item.id}><TopicImg/>{item.title}</TopicItem>
                        )
                    )
                }
            </TopicWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        topicList: state.HOME.topicList
    }
}

const mapDispatchToProps= (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);

