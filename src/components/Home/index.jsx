import React from 'react'
import { Container } from './style'

import Carousel from '../Carousel'
import HouseCard from '../HouseCard'
import Category from '../Category'

export const Home = () => {
    return (
        <Container>
            <Carousel />
            {/* <HouseCard /> */}
            <Category />
        </Container>
    )
}


export default Home