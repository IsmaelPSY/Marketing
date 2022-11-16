import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(https://wallpapercave.com/wp/wp2595319.jpg) center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size:cover;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-direction:column;
`;
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0;
    padding: 10px; 
`;
const Button = styled.button`
    width: 40%;
    border:none;
    padding:15px 30px;
    background-color:teal;
    color:white;
    cursor: pointer;
    margin-bottom:10px;
`;
const Link=styled.a`
    margin: 5px 0;
    font-size: 15px;
    text-decoration:underline;
    cursor:pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Iniciar Sesión</Title>
        <Form>
          <Input placeholder="Nombre de usuario" />
          <Input placeholder="Cobtraseña" />
          <Button>Login</Button>
          <Link>No recuerdas tu contaseña?</Link>
          <Link>Crear una cuenta</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login