import React, { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../../contexts/Store";

const ArticleCard = () => {
  // getting articles from the store using useContext
  const { articles } = useContext(StoreContext);

  return (
    <Container>
      {/* mapping throught each article to get the individual articles to display */}

      {articles.map((article) => {
        return (
          <AnArticle key={article.sys.id} tabIndex="0">
            <Img src="https://via.placeholder.com/300" alt="placeholderImage" />
            <TextContainer>
              <Title>{article.fields.title}</Title>
              <Category>{article.fields.category}</Category>
            </TextContainer>
          </AnArticle>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 70px;
  margin-right: 70px;
  border: 1px solid blue;
  background-color: #f4e2db;
  transition: all 300ms ease-out;

  &:focus {
    transform: scale(1.01);
    background: lightgray;
    cursor: pointer;
  }
  min-width: 400px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const AnArticle = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex: 1 1 400px;
  gap: 20px;
  margin: 20px;
  border: 1px solid red;
  background-color: white;
  @media only screen and (max-width: 600px) {
    max-height: 350px;
  }
  & :hover {
    opacity: 0.5;
    /* background: lightgray; */
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
  margin-bottom: 10px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 19px;
`;
const Category = styled.p`
  font-size: 12px;
`;

export default ArticleCard;
