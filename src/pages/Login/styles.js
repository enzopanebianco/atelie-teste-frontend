import styled from 'styled-components'
import BgBrown from '../../assets/background-marrom.png'

export const LoginContainer = styled.div`
    background-image:url(${BgBrown});
    background-size:cover;
    width:100%;
    margin-top: 5rem;
    padding:3rem 0;
    color: white;
    text-align:center;
`
export const LoginQuestions = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    margin-top: 1rem;
    color:#F2A516;
    font-size:0.65rem;
    font-weight:lighter;
    a{
        outline:none;
        color:#F2A516;
        text-decoration:none;
    }
    span{
        cursor: pointer;
    }
`
