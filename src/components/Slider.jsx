import styled from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState } from "react";
import {sliderItems} from "../data"
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position:relative;
  overflow:hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  position:absolute;
  bottom: 0;
  left: ${(props) => props.direction == "left" && "10px"};
  right: ${(props) => props.direction == "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index:2;
`;

const Wrapper = styled.div`
  height: 100%;
  display:flex;
  transition:all 1.5s ease;
  transform:translateX(${props=>props.slideIndex*-100}vw);
`;
const Slide = styled.div`
  width:100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color:#${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  transition:all 0.5s ease;
  &:hover{
    transform:scale(1.05);
    background-color:#aff7cf;
  }
`;

const Slider = () => {
  const [slideIndex,setSlideIndex]=useState(0);
  const handleClick=(direction)=>{
    if(direction==="left"){
      setSlideIndex(slideIndex>0?slideIndex-1:2)
    }else{
      setSlideIndex(slideIndex <2? slideIndex+1:0)
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item=>(
        <Slide bg={item.bg} key={item.id}>
          <ImgContainer>
            <Image src={item.img}></Image>
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Description>{item.desc}</Description>
            <Button>Comprar ahora</Button>
          </InfoContainer>
        </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
