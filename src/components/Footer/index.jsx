import React from 'react'
import * as S from './styles'
import { ReactComponent as Logo } from '../../assets/logo-campanha-red.svg'
function Footer() {
  return (
    <div>
      <S.FooterContainer>
        <S.FooterCampaign>
          <strong>SÓ QUEM VENDE CURTE AS</strong>
          <strong>EXPERIÊNCIAS MAIS DIFERENTONAS!</strong>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </S.FooterCampaign>
        <Logo />
      </S.FooterContainer>
      <S.FooterContact>
       
          <p>Dúvidas? Envie um e-mail para: <a>
            atendimento@umbrindenaeuropa.com.br
          </a>
        </p>
        <p>Imagens meramente ilustrativas. Promoção válida de 01/02 a 31/03/2020</p>
      </S.FooterContact>
    </div>
  )
}

export default Footer