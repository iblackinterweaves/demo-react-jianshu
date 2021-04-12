import styled from 'styled-components';
import logoPic from '../../statics/01logo.png';

export const HeaderWrapper = styled.div`
    z-index: 1;
    ;position: relative
    ;width：100%
    ;height: 58px
    ;border-bottom: 1px solid #f0f0f0
`;

export const Logo = styled.div`
    position: absolute
    ;display: block
    ;top: 0
    ;left: 0
    ;width: 100px
    ;height: 58px
    ;background: url(${logoPic})
    ;background-size: contain
`;

export const Nav = styled.div`
    width: 960px
    ;height: 100%
    ;margin: 0 auto
    ;padding-right: 70px
    ;box-sizing: border-box
`;

export const NavItem = styled.div`
    &.left {
        float: left
        ;color:#333
    }
    &.right {
        float: right
        ;color: #969696
    }
    &.active {
        color: #ea6f5a
    }
    line-height: 56px
    ;padding: 0 15px
    ;font-size: 17px
`;

export const SearchWrapper = styled.div`
    position: relative
    ;float: left
    .zoom {
        position: absolute
        ;right: 5px
        ;bottom: 5px
        ;width: 30px
        ;line-height: 30px
        ;text-align: center
        ;border-radius: 15px
        &.focused {
            background-color: grey
            color: #fff
        }
    }
    
    
`;

export const NavSearch = styled.input`
    width: 160px
    ;height: 38px
    ;border: none
    ;outline: none
    ;border-radius: 19px
    ;background: #eee
    ;margin-top: 9px
    ;margin-left: 20px
    ;padding: 0 30px 0 20px
    ;box-sizing: border-box /*防止padding 撑开width*/
    ;font-size: 14px
    &::placeholder {
        color: #666
    }
    
    &.slide-enter {
        transition: all 2s ease-out;
    }
    &.slide-enter-active {
        width: 240px
    }
    &.slide-exit {
        transition: all 2s ease-out;
    }
    &.slide-exit-active {
        width: 160px
    }
    
    &.focused {
        width: 240px
    }
`;

export const SearchInfo = styled.div`
    position: absolute
    ;left: 0
    ;top: 58px
    ;width: 240px
    ;padding: 0 20px
    ;box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: #fff
`;

export const SearchInfoTitle = styled.div`
    display: -webkit-inline-box;
    ;margin-top: 20px
    ;margin-bottom: 15px
    ;line-height: 20px
    ;font-size: 14px
    ;color: #969696
`;

export const SearchInfoSwitch = styled.span`
    margin-top: 20px
    ;float: right
    ;font-size: 14px
    ;line-height: 20px
    ;color: #969696
    ;cursor: pointer
    .spin {
        float: left
        ;display: block
        ;font-size: 12px
        ;margin-right: 2px
        ;transition: all 2s ease-in;
        ;transform-origin: center center;
    }
`;

export const SearchInfoList=styled.div`
    overflow: hidden
`;

export const SeachInfoItem = styled.a`
    font-size: 12px
    ;padding: 0 5px
    ;line-height: 20px
    ;border: 1px solid #ddd
    ;color: #787878
    ;border-radius: 3px
    ;display: block
    ;float: left
    ;margin-right: 10px
    ;margin-bottom: 15px
`;

export const Addition = styled.div`
    position: absolute
    ;right: 0
    ;top: 0
    ;height: 56px
`;

export const Button = styled.div`
    float: right
    ;margin-top: 9px
    ;line-height: 38px
    ;border-radius: 19px
    ;border: 1px solid #ec6149
    ;margin-right: 20px
    ;padding: 0 20px
    ;font-size: 14px
    &.reg {
        color: #ec6149
    }
    &.writing {
        color: #fff
        ;background-color: #ec6149
    }
`;