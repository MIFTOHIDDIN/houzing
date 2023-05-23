import styled from "styled-components";

const getType = ( { type } ) => {
    switch ( type ) {
        case 'dark':
            return {
                background: 'transparent',
                border: '1px solid #FFFFFF',
                color: 'white'
            };
        case 'light':
            return {
                background: '#FFFFFF',
                border: '1px solid #E6E9EC',
                color: '#0D263B'
            };
        case 'primary':
            return {
                background: '#0061DF',
                border: 'none',
                color: '#FFFFFF'
            }
        default:
            return {
                background: '#0061DF',
                border: 'none',
                color: '#FFFFFF'
            }
    }
}

const Container = styled.input`
display: flex;
align-items: center;
justify-content: center;
height: ${ ( { height } ) => ( height ? `${ height }px` : `44px` ) };
font-size: ${ ( { fontSize } ) => ( fontSize ? `${ fontSize }px` : `14px` ) };
width: ${ ( { width } ) => ( width ? `${ width }px` : `100%` ) };
border-radius:2px;
outline:none;
border:1px solid #e6e9ec;
/* ${ getType }  */
min-width:120px;
padding-left:${ ( { icon } ) => icon ? "35px" : "20px" };

`
const Wrapper = styled.div`
display: flex;
align-items: center;
width: ${ ( { width } ) => ( width ? `${ width }px` : `100%` ) };
position:relative;

`
const Icon = styled.div`
position: absolute;
left: 10px;
`


export { Container, Wrapper, Icon, }