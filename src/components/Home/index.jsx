import React from 'react'
import { Container } from './style'
import {Input} from '../Generic'

export const Home = () => {
    return (
        <Container>
            Home
            <Input width={120} placeholder={ 'test' } />
        </Container>
    )
}


export default Home