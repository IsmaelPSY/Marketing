import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Info = styled.div`
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;
const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;
const Button = styled.button`
    border:none;
    padding: 10px;
    background-color:white;
    color:gray;
    cursor:pointer;
    font-weight:800;
`;

const CategoryItems = ({ item }) => {
  return (
    <Container>
      <Image src={item.imagen} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Comprar ahora</Button>
      </Info>
    </Container>
  );
};

export default CategoryItems;
