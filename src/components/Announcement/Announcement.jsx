import styled from "styled-components";

const Container = styled.div`
  padding: 0;
  margin: 0;
  color: #fff;
  background-color:#00be8f;
  background-size: 200%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Oferta de 30%</Container>;
};

export default Announcement;
