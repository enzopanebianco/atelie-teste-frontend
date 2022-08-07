import styled from 'styled-components'
import BgGray from '../../assets/background-cinza.png'

export const FooterContainer = styled.footer`
    background:url(${BgGray});
    width:100%;
    background-size:cover;
    display: flex;
    padding: 3rem;
    justify-content: center;
    gap: 3rem;
    align-items: center;
    svg{
        min-width:60px;
        max-width: 15%;
    }
    @media(max-width:850px){
        padding:3rem 1rem;
        gap: 5rem;
    }
    @media(max-width:390px){
        padding:3rem;
        gap:2rem;
        svg{

        }
    }
`
export const FooterCampaign = styled.div`
    display: flex;
    flex-direction:column;
    width:50% ;
    color:#222;

    strong{
        word-spacing: 2px;
        font-weight:600;
        font-size:1.5rem;
        margin-top:0.5rem;
    }
    p{
        margin-top: 1rem;
        font-size:0.75rem;
        text-align:justify;
    }
    @media(max-width:850px){
       strong{
        font-size:1rem;

       }
    }
    @media(max-width:390px){
        width: 80%;
        strong{
            font-size: 0.65rem;
        }
        p{
            font-size:0.5rem;
        }
    }
`
export const FooterContact = styled.div`
    width: 100%;
    background:#F2A516;
    padding:0.75rem 0px;
    display: flex;
    justify-content:space-evenly;
    font-size: 0.75rem;
    color:white;
     a{
        color:black
    }
    @media(max-width:390px){
        font-size:0.4rem;
    }
   
`