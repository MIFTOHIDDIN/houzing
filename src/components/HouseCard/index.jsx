import React from 'react'
import { Container, Content, Details, Divider, Icons, Img } from './style'
import noimg from '../../assets/img/noimg.png'
export const HouseCard = ( { url, title, info, bed, bath, garage, ruler } ) => {
    return (
        <Container>

            <Img src={ url || noimg } />
            <Content>
                <div className='subTitle'>{ title || "New Apartmen Nice Wiew" }</div>
                <div className='info'>{ info || "Quincy St, Brooklyn, NY, USA" }</div>
                <Details>
                    <Details.Item>
                        <Icons.Bed />
                        <div className="info">Bed { bed || 0 }</div>
                    </Details.Item>

                    <Details.Item>
                        <Icons.Bath />
                        <div className="info">Bath { bath || 0 }</div>

                    </Details.Item>

                    <Details.Item>
                        <Icons.Garage />
                        <div className="info">Garage { garage || 0 }</div>

                    </Details.Item>

                    <Details.Item>
                        <Icons.Ruler />
                        <div className="info">Ruler { ruler || 0 }</div>

                    </Details.Item>

                </Details>

            </Content>
            <Divider />
            <Content footer>
                <Details.Item >
                    <div className="info">$2800/mo</div>
                    <div className="subTitle">$7500/mo</div>

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