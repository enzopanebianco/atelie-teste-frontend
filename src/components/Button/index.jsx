import React from 'react';
import * as S from './styles'

//o prop background é o background do botao
//o prop large é para quando o botao for maior como no caso do login

function Button({background,large,...props}) {
  return(
    <S.ButtonContainer {...props} large={large} background={background}>
      {props.children}
    </S.ButtonContainer>
  );
}

export default Button;