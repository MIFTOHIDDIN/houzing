import React from 'react'
import { Container, Content, Details, Divider, Icons, Img } from './style'
import noimg from '../../assets/img/noimg.png'
export const HouseCard = ( { data = {} } ) => {

    const {

        salePrice,
        price,
        attachments,
        address,
        city,
        country,
        description,
        houseDetails,
    } = data
    return (
        <Container>

            <Img src={ ( attachments && attachments[ 0 ]?.imgPath ) || noimg } />
            <Content>
                <div className='subTitle inline'>{ city || "No name" },{ country },{ description }</div>
                <div className='info'>{ address || "No adress" }</div>
                <Details>
                    <Details.Item>
                        <Icons.Bed />
                        <div className="info">Bed { houseDetails?.beds || 0 }</div>
                    </Details.Item>

                    <Details.Item>
                        <Icons.Bath />
                        <div className="info">Bath { houseDetails?.bath || 0 }</div>

                    </Details.Item>

                    <Details.Item>
                        <Icons.Garage />
                        <div className="info">Garage { houseDetails?.garage || 0 }</div>

                    </Details.Item>

                    <Details.Item>
                        <Icons.Ruler />
                        <div className="info">Ruler { houseDetails?.area || 0 }kv</div>

                    </Details.Item>

                </Details>

            </Content>
            <Divider />
            <Content footer>
                <Details.Item >
                    <div className="info">${ salePrice || 0 }</div>
                    <div className="subTitle">${ price || 0 }</div>

                </Details.Item>
                <Details.Item row >
                    <Icons.Resize />
                    <Icons.Love />
                </Details.Item>
            </Content>
        </Container>
    )
}
export default HouseCard