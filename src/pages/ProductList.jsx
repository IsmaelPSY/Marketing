import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import Announcement from "../components/Announcement/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import { Footer } from "../components/Footer";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
padding: 10px;
margin-right: 20px;
`;
const Option = styled.option``;
export const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Zapatillas adida</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar Producto:</FilterText>

          <Select>
            <Option>Color</Option>
            <Option>Blanco</Option>
            <Option>Negro</Option>
            <Option>Azul</Option>
          </Select>
          <Select>
            <Option>Talla</Option>
            <Option>38</Option>
            <Option>39</Option>
            <Option>40</Option>
            <Option>41</Option>
            <Option>42</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filtro por precio</FilterText>
          <Select>
            <Option>El más nuevo</Option>
            <Option>Precio (asc)</Option>
            <Option>Precio (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};
