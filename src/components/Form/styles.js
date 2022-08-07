import styled from 'styled-components'
import ArrowSvg from '../../assets/seta.svg'

export const Container = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:40%;
    margin: 2rem auto;
    @media(max-width:850px){
        width: 70%;
    }
    @media(max-width:390px){
        width: 80%;
        align-items:flex-start;
    }
`
export const Title = styled.h2`
    color:white;
    margin-bottom:2rem;
    font-size: 2rem;
`
export const Field = styled.div`
    display: flex;
    width: 100% ;
    flex-direction:column;
    margin-bottom:2rem;
    height:3.5rem;
    
`
export const Label = styled.label`
    color: white;
    font-weight: lighter;
    align-self: flex-start;
    font-size:0.75rem;
`

export const Input = styled.input`
    border:0;
    border-bottom: 2px solid ${p=>p.errorColor?'#F2A516':'white'};
    background: none;
    color: white;
    outline: none;
    font-size: 1rem;
    padding:3px 0px;

    ::placeholder{
        color:white;
    }
`
export const BreakInput = styled.div`
    display:flex;
    gap: 2rem;
    width:100%;
    @media(max-width:390px){
        width:48%;
        gap: 1rem;
    }
`

export const Select = styled.select`
    border:0;
    border-bottom: 2px solid white;
    background: none;
    color: white;
    outline: none;
    font-size: 1rem;
    padding:4px 0px;
    margin-bottom:2rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance:none;
    appearance: none;
    background:url(${ArrowSvg}) no-repeat;
    background-position: calc(100% - 0.75rem) center !important;
    option{
        color:black;
    }
   
`

export const Error = styled.span`
    color:#F2A516;
    align-self:flex-start;
    font-size:0.75rem;
    margin-top:5px ;
`