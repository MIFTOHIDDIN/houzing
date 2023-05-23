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

const Container = styled.button`
display: flex;
align-items: center;
justify-content: center;
height: ${ ( { height } ) => ( height ? `${ height }px` : `44px` ) };
font-size: ${ ( { fontSize } ) => ( fontSize ? `${ fontSize }px` : `14px` ) };
width: ${ ( { width } ) => ( width ? `${ width }px` : `130px` ) };
border-radius:2px;
${ getType } 
cursor: pointer;
min-width:120px;
:active{
    opacity:0.7
}
`

export { Container }