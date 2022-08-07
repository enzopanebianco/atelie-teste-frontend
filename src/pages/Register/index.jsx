import React, { useState } from 'react'
import * as S from './styles'
import * as Form from '../../components/Form/styles'
import Button from '../../components/Button'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api'
import ModalCreatedUser from '../../modals/ModalCreatedUser'
import {ReactComponent as ArrowSvg} from '../../assets/seta.svg'

//schema que será validado pelo react hook form
const formSchema = yup.object({
  name: yup.string().required("O campo nome é obrigatório"),
  tax_id: yup.string().required("O campo cpf é obrigatório")
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "Digite um CPF válido"),
  email: yup.string().email('Digite um email válido').required("O campo email é obrigatório"),
  password: yup.string().required("O campo senha é obrigatório"),
  password_confirmation: yup.string().oneOf([yup.ref('password'), null], "As senhas não batem"),
  company: yup.string().required("O campo empresa é obrigatório"),
  segment: yup.string().required("Selecione alguma categoria"),

})

function Register() {
  const [modalUser, setModalUser] = useState(false)
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema)
  })

  const registerUser = async (registerData) => {
    if (registerData) {
      //remove os caracteres especiais do cpf
      // já que a api só aceita números no tax_id(cpf)
      registerData.tax_id = registerData.tax_id.replace(/[^\w\s]/gi, "")
      try {
        const { data } = await api.post('/register', registerData)
        //caso a api retorne 200, o modal de criação do usuário aparecerá
        if (data)
          setModalUser(true)
      }
      catch (error) {
        Promise.reject(error)
      }
    }
  }
  return (
    <>
      <S.RegisterContainer>
        <Form.Title>CADASTRE-SE</Form.Title>
        <p>Preencha os campos abaixo para validar sua participação</p>
        <p>na campanha e concorrer aos prêmios.</p>
        <Form.Container onSubmit={handleSubmit(registerUser)}>
          <Form.Field>
            <Form.Label>Nome</Form.Label>
            <Form.Input
              errorColor={errors.name?.message}
              {...register("name")} type="text" placeholder='Nome' />
            {errors.name?.type === 'required' && <Form.Error>{errors.name?.message}</Form.Error>}
          </Form.Field>
          <Form.BreakInput>
            <Form.Field>
              <Form.Label>Cpf</Form.Label>
              <Form.Input
                errorColor={errors.tax_id?.message}
                maxLength="14"
                {...register("tax_id",)} type="text" placeholder='Cpf' />
              {errors.tax_id?.type === 'required' && <Form.Error>{errors.tax_id?.message}</Form.Error>}
              {errors.tax_id?.type === 'matches' && <Form.Error>{errors.tax_id?.message}</Form.Error>}
            </Form.Field>
            <Form.Field>
              <Form.Label>Email</Form.Label>
              <Form.Input
                errorColor={errors.email?.message}
                {...register("email")} type="text" placeholder='Email' />
              {errors.email?.type === 'required' && <Form.Error>{errors.email?.message}</Form.Error>}
              {errors.email?.type === 'email' && <Form.Error>{errors.email?.message}</Form.Error>}
            </Form.Field>
          </Form.BreakInput>
          <Form.BreakInput>
            <Form.Field>
              <Form.Label>Senha</Form.Label>
              <Form.Input
                errorColor={errors.password?.message}
                {...register("password")} type="password" placeholder='Senha' />
              {errors.password?.type === 'required' &&
                <Form.Error>{errors.password?.message}</Form.Error>}
            </Form.Field>
            <Form.Field>
              <Form.Label>Senha</Form.Label>
              <Form.Input
                errorColor={errors.password_confirmation?.message}
                {...register("password_confirmation")} type="password" placeholder='Confirme sua senha' />
              {errors.password_confirmation?.type === 'oneOf' &&
                <Form.Error>{errors.password_confirmation?.message}</Form.Error>}
            </Form.Field>
          </Form.BreakInput>
          <Form.BreakInput>
            <Form.Field>
              <Form.Label>Empresa</Form.Label>
              <Form.Input
                errorColor={errors.company?.message}
                {...register("company")} type="text" placeholder='Empresa' />
              {errors.company?.type === 'required' &&
                <Form.Error>{errors.company?.message}</Form.Error>}
            </Form.Field>
            <Form.Field>
              <Form.Label>Classificação</Form.Label>
              <Form.Select
                errorColor={errors.segment?.message}
                {...register("segment")}>
                <option >Escolha sua categoria</option>
                <option value="Manager">Gerente</option>
                <option value="Dealer">Revendedor</option>
                <option value="Distributor">Distribuidor</option>
                
              </Form.Select>
              {errors.segment?.type === 'required' &&
                <Form.Error>{errors.segment?.message}</Form.Error>}
            </Form.Field>
          </Form.BreakInput>
          <Button type="submit" background="#F2A516">
            ENVIAR
          </Button>
        </Form.Container>
        <ModalCreatedUser modalUser={modalUser} setModalUser={setModalUser} />
      </S.RegisterContainer>
    </>
  )
}

export default Register;

