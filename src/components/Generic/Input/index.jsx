import React from 'react'
import { Container } from './style'

export const Input = ( { type, onChange, placeholder, name, value, defaultValue,height,width } ) => {
    return <Container
        onChange={ onChange }
        name={ name }
        value={ value }
        defaultValue={ defaultValue }
        placeholder={ placeholder }
        width={ width }
        type={ type }
        height={height}
    />


}
export default Input