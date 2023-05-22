import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { navbar } from '../../utils/navbar'
import { Container, Logo, Section, Wrapper, Link } from './style'
export const Navbar = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <Wrapper>
                <Section onClick={ () => navigate( '/home' ) } logo>
                    <Logo /> <h3>Houzing</h3>

                </Section>
                <Section>
                    { navbar.map( ( { title, path,  },index ) => {
                        return <Link className={ ( { isActive } ) => isActive && 'active' } key={ index }
                            to={ path }>
                            { title }
                        </Link>
                    } ) }
                </Section>
                <Section>3</Section>
            </Wrapper>
            <Outlet />
        </Container>
    )
}
export default Navbar