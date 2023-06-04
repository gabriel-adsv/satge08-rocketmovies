import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Faça um registro dos seus filmes favoritos.</p>
        <h2>Faça seu login</h2>
        <Input placeholder="E-mail" type="text" icon={FiMail}></Input>
        <Input placeholder="Senha" type="password" icon={FiLock}></Input>
        <Button title="Entrar"></Button>
        <Link to="/register">Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
