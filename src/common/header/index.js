import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group'

import Actions from '../../action/actionCreators';


import {
    HeaderWrapper
    ,Logo
    ,Nav
    ,NavItem
    ,SearchWrapper
    ,NavSearch
    ,SearchInfo
    ,SearchInfoTitle
    ,SearchInfoSwitch
    ,SearchInfoList
    ,SeachInfoItem
    ,Addition
    ,Button
} from './style.js';

class Header extends Component{

    getSearchInfo= () => {

        const {
            focused
            ,temporaryItem
            ,mouseInfo
            ,changeMouseStateInfo
            ,handleChangePage
        } = this.props
        if(focused || mouseInfo) {
            return (
                <SearchInfo onMouseEnter={() => {changeMouseStateInfo(true)}}
                            onMouseLeave={() => {changeMouseStateInfo(false)}}
                >
                    <SearchInfoTitle>
                        热门搜索
                    </SearchInfoTitle>
                    <SearchInfoSwitch onClick={() => handleChangePage(this.spinIcon)}
                    >
                        <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
                        缓一缓
                    </SearchInfoSwitch>
                    <SearchInfoList>
                        {
                            temporaryItem.map((item, index) => {
                                return (
                                    <SeachInfoItem key={index}>{item}</SeachInfoItem>
                                );
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>);
        }
    }

    render() {
        const {
            focused
            ,itemList
            ,login
            ,changeFocusedState
            ,loginOut
        } = this.props

        const len = itemList.length

        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo href='/'/>
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载</NavItem>
                    {
                        login? <NavItem className='right' onClick={loginOut}>退出</NavItem>: <Link to='/login'><NavItem className='right'>登入</NavItem></Link>
                    }

                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition timeout={2000}
                                       in={focused}
                                       classNames='slide'
                        >
                            <NavSearch placeholder='搜索'
                                       className={focused? 'focused': ''}
                                       onFocus={() => {changeFocusedState(true, len)}}
                                       onBlur={() => {changeFocusedState(false, len)}}
                            />
                        </CSSTransition>
                        <span className={focused? 'focused iconfont zoom': 'iconfont zoom'}>&#xe62d;</span>
                        {this.getSearchInfo()}
                    </SearchWrapper>

                </Nav>
                <Addition>
                    <Button className='writing'>
                        <span className="iconfont">&#xe615;</span>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }

}



const mapStateToProps =(state) => {
    return {
        focused: state.UI.HEADER.focused
        ,itemList: state.UI.HEADER.itemList
        ,mouseInfo: state.UI.HEADER.mouseInfo
        ,temporaryItem: state.UI.HEADER.itemPageInfo.temporaryItem
        ,pageNo: state.UI.HEADER.itemPageInfo.pageNo
        ,login: state.LOGIN.login
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        changeFocusedState: (state, len)=> {
            dispatch(Actions.UI.changeFocusedState(state));
            (len === 0) && dispatch(Actions.UI.getAndInitItemList());
        }
        ,changeMouseStateInfo: (state) => {
            dispatch(Actions.UI.changeMouseStateInfo(state))
        }
        ,handleChangePage: (spin) => {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle) {
                originAngle = parseInt(originAngle);
            }else {
                originAngle = 0;
            }
            console.log(originAngle)
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            dispatch(Actions.UI.handleChangePage());
        }
        ,loginOut: () => {
            dispatch(Actions.LOGIN.changeLoginState(false));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);