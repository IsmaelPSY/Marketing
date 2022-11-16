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
  width: 40%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap:wrap;
`;
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0 0;
    padding: 10px; 
`;
const Agreement = styled.span`
    font-size:12px;
    margin:20px 0;
`;
const Button = styled.button`
    width: 40%;
    border:none;
    padding:15px 30px;
    background-color:teal;
    color:white;
    cursor: pointer;
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Crear una cuenta</Title>
        <Form>
          <Input placeholder="Nombre" />
          <Input placeholder="Apellidos" />
          <Input placeholder="Nombre de usuario" />
          <Input placeholder="Correo electrónico" />
          <Input placeholder="Cobtraseña" />
          <Input placeholder="Confirma tu contraseña" />
          <Agreement>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione eaque sint voluptates incidunt a eligendi repellendus tempore nobis voluptatibus ipsum soluta, placeat dolores fugit cum excepturi ab sunt vel?
            <b>privacidad y política</b>
          </Agreement>
          <Button>Crear cuenta</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
