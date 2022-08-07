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
          <p>*Campanha válida de 01/02 a 31/03/2020. Vendas via Business Center
            e para o Setor Público não serão válidas. A apuração do mês de agosto sera retroativa. Imagens meramente ilustrativas.
            Realizamos todos os esforços para garantir a precisão das informações, mas não
            somos responsáveis por qualquer contéudo editorial, fotográfico ou por erros
            tipográficos. Todas as imagens são apenas para fins ilustrativos. Para especificações
            completas de produto, informações de serviços e garantias, visite
            www.umbrindenaeuropa/saiba. Não fazemos nenhuma representação ou garantia em relação
            a produtos ou serviços de terceiros. Outros nomes de empresas, produtos e
            serviços podem ser marcas registradas ou marcas de serviços de terceiros. © 2020.
            Todos os direitos reservados.</p>
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