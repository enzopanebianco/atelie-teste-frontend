import styled from 'styled-components';
import BgImg from '../../assets/background.png'

export const Container = styled.header`
    background-image: url(${BgImg}) ;
    width: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
    background-size:cover;
    /* background-attachment: fixed; */
    background-position: center;
    
`

export const LeftBanner = styled.div`
    transform: translateX(130px) translateY(60px) ;

    svg{
        width: 60%;
    }
    div{
        display: flex;
        gap:1rem;
    }
    @media(max-width:1200px){
        transform: translateX(100px) translateY(60px) ;
       
      
    }
    @media(max-width:850px){
        transform: translateX(130px) translateY(60px) ;
        
       svg{ 
            width:50%
        }
        div{
            transform: translateY(-30px);

        }
    }
    @media(max-width:390px){
        transform: translateX(90px) translateY(100px);
        svg{
            width:40%
        }
        div{
            transform: translateY(-120px);
            display:flex;
            gap:1rem ;
        }
    }
`
export const CloudImg = styled.img`
    width: 55%;
    transform: translateY(60px) translateX(-30px);

    @media(max-width:390px){
        width: 55%;
        transform: translateY(40px) translateX(-80px);

    }

`