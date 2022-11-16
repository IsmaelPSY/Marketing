import FacebookIcon from "@mui/icons-material/Facebook";
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Logo = styled.img`
height:20vh;
`;
const Description = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #3b5999;
  display: fleX;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
text-align:center;
`;
const Title = styled.h3`
  margin-bottom: 30px;

  
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding:20px;
`;
const ContactItem=styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`;

const Payment=styled.img`
    width:50%;
`;
export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo src="https://i.ibb.co/PN3K3Zr/logo1.png"></Logo>
        <Description>
          Somos una tienda de zapatillas en Puerto Maldonado que ofrece a sus
          clientes zapatillas 100% original
        </Description>
        <SocialContainer>
          <SocialIcon>
            <FacebookIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Enlaces</Title>
        <List>
          <ListItem>Inicio</ListItem>
          <ListItem>Carrito</ListItem>
          <ListItem>Zapatillas deportivas</ListItem>
          <ListItem>Zapatillas urbanas</ListItem>
          <ListItem>Productos populares</ListItem>
          <ListItem>Mi cuenta</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacto</Title>
        <ContactItem> <RoomIcon style={{marginRight:"10px"}}/>
          Av. Leon Velarde 807-b, Puerto Maldonado 17001
        </ContactItem>
        <ContactItem> <PhoneIcon style={{marginRight:"10px"}}/> +51 903 269 472</ContactItem>
        <ContactItem> <MailOutlineIcon style={{marginRight:"10px"}}/> dkarloshoes7@gmail.com</ContactItem>
        <Payment/>
      </Right>
    </Container>
  );
};
