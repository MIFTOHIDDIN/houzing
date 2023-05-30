import React from 'react'
import { Container } from './style'

import { useEffect } from 'react';
import { useState } from 'react';
import Slider from "react-slick";
import CategoryCard from '../CategoryCard';
import { useNavigate } from 'react-router-dom';



const { REACT_APP_BASE_URL: url } = process.env
const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "25px",
    slidesToShow: 3,
    speed: 500,
    arrow: true,
    dots: true,
    appenDots: ( dots ) => <h1>{ dots }</h1>,
};
export const Category = () => {
    const [ data, setData ] = useState( [] )
    const navigate = useNavigate()

    useEffect( () => {
        fetch( `${ url }/categories/list`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoibW1hbWFzb2Jpcm92QG1haWwucnUiLCJleHAiOjE3MDM0NjkzMzAsImlhdCI6MTY4NTQ2OTMzMCwic2NvcGUiOiJST0xFX1VTRVIifQ.p7UNDxoo2QM_A0BkKTfllEPDpdVXnWbazW__NYkQdUpmcZmf3R3Dxx7sErWGFIQguW526NWRr_KdrILZe4dCp6TeTb9eCpw1tvWHbO4ap9DOb9V2XqdK0qxP84wHD6HuzyM2O3yqDS_PWzwlMHcVUqFopWGH3ec7295MMVjQuPo3nZmDeUrqF7gyJgjmPyv3-rZQ3rCnvgrMWpFFm_I5ps_HTiQRUC5Hz2Fesar2GU5EPq5XgAKOpCQ5wDTtScPICDQ3sSj_uJNA0oebfzOvmmuPD2rOd2gEj-4M5fgGJE51WYqXKgFYhKOvxLq94Jg2zgn7qfVwFq3FO_XPfj6Fag`
            }
        } )
            .then( ( res ) => res.json() )
            .then( ( res ) => {
                setData( res?.data || [] )

            } )

    }, [] )


    return (
        <Container>

            <Slider  { ...settings }>


                { data.map( ( value ) => {
                    return <CategoryCard onClick={ () => navigate( `/properties?category_id=${ value?.id }` ) }
                        key={ value.id } data={ value } />
                } ) }

            </Slider>
        </Container >
    )
}
export default Category


