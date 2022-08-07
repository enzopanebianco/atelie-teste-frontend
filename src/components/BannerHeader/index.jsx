import React from 'react'
import { useNavigate } from 'react-router-dom'
import Clouds from '../../assets/clouds.png'
import { ReactComponent as Logo } from '../../assets/logo-campanha-red-tagline.svg'
import Button from '../Button'
import * as S from './styles'

function BannerHeader() {
    const navigate = useNavigate()
    return (
        <>
            <S.Container>
                <S.LeftBanner>

                    <Logo />
                    <div>
                        <Button onClick={()=>navigate('/login')} background="#F2A516">
                            LOGIN
                        </Button>

                        <Button onClick={()=>navigate('/')} background="#F2A516">
                            CADASTRE-SE
                        </Button>
                    </div>
                </S.LeftBanner>

                <S.CloudImg src={Clouds} alt="Pessoas nas nuvens" />

            </S.Container>
        </>
    );
}

export default BannerHeader;