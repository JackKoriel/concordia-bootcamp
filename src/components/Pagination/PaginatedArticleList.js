import React, { useContext } from "react";
import ArticleCard from "../Cards/ArticleCard";
import styled from "styled-components";
import { StoreContext } from "../../contexts/Store";

const PaginatedArticleList = () => {
  const { setSkip, setLimit, limit } = useContext(StoreContext);

  const handleClick = (ev) => {
    setLimit(limit + 3);
    //not changing skip for now beacuse it is not required
    setSkip(0);
  };
  return (
    <>
      <ArticleList>
        <ArticleCard />
      </ArticleList>
      <LoadMoreButton
        onClick={(ev) => {
          handleClick(ev);
        }}
      >
        Load More
      </LoadMoreButton>
    </>
  );
};

const ArticleList = styled.div``;

const LoadMoreButton = styled.button`
  border: none;
  border-radius: 20px;
  width: 100px;
  font-size: 15px;
  font-weight: 700;
  border-bottom: 20px;
`;

export default PaginatedArticleList;
