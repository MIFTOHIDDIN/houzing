import React, { useRef, useState } from 'react'
import { Container, Icons, Section, SelectAnt } from './style'
import { Input, Button } from '../Generic'
import { MenuWrapper } from './style'
import { uzeReplace } from '../../hooks/useReplace'
import { useNavigate, useLocation } from 'react-router-dom'
import useSearch from '../../hooks/useSearch'
import { useEffect } from 'react'

const { REACT_APP_BASE_URL: url } = process.env


export const Filter = () => {
    const [ data, setData ] = useState( [] )
    const [ value, setValue ] = useState( "Select Category" )



    const location = useLocation()
    const [ isActive, setIsActive ] = useState( false )
    const navigate = useNavigate()

    const query = useSearch()

    const countryRef = useRef()
    const regionRef = useRef()
    const cityRef = useRef()
    const zipRef = useRef()

    const roomsRef = useRef()



    const minPriceRef = useRef()
    const maxPriceRef = useRef()

    const menuRef = useRef()
    useEffect( () => {
        fetch( `${ url }/categories/list`, {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem( 'token' ) } `
            }
        }
        )
            .then( ( res ) => res.json() )
            .then( ( res ) => {
                setData( res?.data || [] )




            } )

    }, [] )

    useEffect( () => {
        let [ d ] = data?.filter(
            ( ctg ) => ctg.id === Number( query.get( 'category_id' ) )
        );
        d?.name && setValue( d?.name )
        !query.get( 'category_id' ) && setValue( 'Select Category' )
    }, [ query, location?.search, data ] )


    const onchangeCategory = ( category_id ) => {
        navigate( `/properties/${ uzeReplace( 'category_id', category_id ) }` )
    }
    const onChangeSort = ( sort ) => {
        navigate( `/properties/${ uzeReplace( 'sort', sort ) }` )
    }


    const onChange = ( { target: { name, value } } ) => {
        navigate( `${ location?.pathname }${ uzeReplace( name, value ) }` )
    }


    const menu = <MenuWrapper>
        <h1 className='subTitle'>Adress</h1>
        <Section>
            <Input defaultValue={ query.get( 'country' ) } onChange={ onChange } ref={ countryRef } name='country' placeholder='Country' />
            <Input defaultValue={ query.get( 'region' ) } onChange={ onChange } ref={ regionRef } name='region' placeholder='Region' />
            <Input defaultValue={ query.get( 'city' ) } onChange={ onChange } ref={ cityRef } name='address' placeholder='City' />
            <Input defaultValue={ query.get( 'zip_code' ) } onChange={ onChange } ref={ zipRef } name='zip_code' placeholder='Zip code' />
        </Section>
        <h1 className='subTitle'>Apartment Info</h1>

        <Section>
            <Input onChange={ onChange } ref={ roomsRef } name='room' placeholder='Rooms' />


            <SelectAnt defaultValue={ query.get( 'sort' ) || 'Select Sort' } onChange={ onChangeSort } >
                <SelectAnt.Option value=''>Select Sort</SelectAnt.Option>
                <SelectAnt.Option value='asc'>O'suvchi</SelectAnt.Option>
                <SelectAnt.Option value='desc'>Kamayuvchi</SelectAnt.Option>

            </SelectAnt>
            <SelectAnt defaultValue={ value } onChange={ onchangeCategory } >
                <SelectAnt.Option value=''>Select Category</SelectAnt.Option>

                { data.map( ( value ) => {
                    return <SelectAnt.Option key={ value.id } value={ value?.id }>{ value?.name }</SelectAnt.Option>
                } )
                }
            </SelectAnt>
        </Section>
        <h1 className='subTitle'>Price</h1>

        <Section>
            <Input onChange={ onChange } ref={ minPriceRef } name='min_price' placeholder='Min price' />
            <Input onChange={ onChange } ref={ maxPriceRef } name='max_price' placeholder='Max price' />
        </Section>

    </MenuWrapper>


    return (
        <Container>

            <Input
                icon={ <Icons.Houses /> }
                placeholder={ 'Enter an adress, neighborhood, city, or ZIP code' } />

            <div ref={ menuRef } className='dropdown' >
                <div className='dropdown-btn'>

                    <Button onClick={ () => setIsActive( !isActive ) } type={ 'light' }> <Icons.Filter /> Advanced</Button>
                </div>
                { isActive &&

                    <div className='dropdown-content'>

                        { menu }

                    </div>
                }
            </div>
            <Button> <Icons.Search />Search</Button>



        </Container>
    )
}


export default Filter