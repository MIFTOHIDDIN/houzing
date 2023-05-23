import React, { forwardRef } from 'react'
import { Container, Icon, Wrapper } from './style'

export const Input = forwardRef( ( {
    type,
    onChange,
    placeholder,
    name,
    value,
    defaultValue,
    height,
    width,
    icon,
}, ref ) => {
    return (
        <Wrapper>
            <Icon >
                { icon }
            </Icon>
            <Container
                ref={ ref }
                icon={ icon }
                onChange={ onChange }
                name={ name }
                value={ value }
                defaultValue={ defaultValue }
                placeholder={ placeholder }
                width={ width }
                type={ type }
                height={ height }
            />
        </Wrapper>

    )
} )
export default Input