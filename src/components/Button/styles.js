import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background: ${p=>p.background};
  min-width:100px;
  padding:${p=>p.large?'0.65rem 2.5rem':'0.5rem 0.75rem'};
  
  border:0;
  color:#fff ;
  border-radius:3px;
  font-weight:600;
  font-size: ${p=>p.large?'0.9rem':'0.65rem'};
  cursor: pointer;

  @media(max-width:390px){
    align-self:center;
  }
`;
