import React, { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../../contexts/Store";

const Featured = () => {
  const { featuredArticle } = useContext(StoreContext);

  return (
    <ContainerFeatured>
      <CardContainer>
        <Img src="https://via.placeholder.com/300" alt="placeholderImage" />
        <FeaturedText>Featured</FeaturedText>
        <TextContainer>
          <Title>{featuredArticle.fields.title}</Title>
          <Category>{featuredArticle.fields.category}</Category>
        </TextContainer>
      </CardContainer>
    </ContainerFeatured>
  );
};

const ContainerFeatured = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 70px;
  margin-right: 70px;
  background-color: #f4e2db;
  transition: all 300ms ease-out;
  min-width: 400px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const CardContainer = styled.div`
  border-radius: 10px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  flex: 1 1 400px;
  gap: 20px;
  margin: 20px;
  border: 1px solid white;
  background-color: white;
  @media only screen and (max-width: 600px) {
    max-height: 350px;
  }
  transition: all 300ms ease-out;
  &:hover {
    opacity: 0.5;
    transform: scale(1.01);
    cursor: pointer;
  }
  &:focus {
    transform: scale(1.01);
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Img = styled.img`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: auto;
  height: 200px;
`;

const TextContainer = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 19px;
`;

const Category = styled.p`
  font-size: 12px;
`;

const FeaturedText = styled.div`
  margin-top: -45px;
  margin-left: 10px;
  font-weight: 700;
  font-style: italic;
  color: gray;
`;

export default Featured;
