import React, { useState, useEffect, useContext } from "react";
// uncomment to use the getAllArticles function
import { getAllArticles } from "../services/contentful";
import { getPaginatedArticles } from "../services/contentful";

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);

  // console.log("featured", featuredArticle);
  // console.log(articles);

  const [skip, setSkip] = useState(1);
  const [limit, setLimit] = useState(6);

  // use to get all articles
  useEffect(() => {
    (async function fetchArticles() {
      const list = await getAllArticles();
      // console.log(list);
      setAllArticles(list);
      getFeatured(list);
    })();
  }, []);

  useEffect(() => {
    (async function fetchArticles() {
      //console log to make sure the function is working
      // console.log("anything");
      setArticles(await getPaginatedArticles((skip, limit)));
    })();
  }, [skip, limit]);

  // TODO: Update the method below to return the latest featured article from the list of articles
  const getFeatured = (list) => {
    // return null;
    let filteredResults = list.filter((article) => {
      return article.fields.featured === true;
    });
    // setFeaturedArticle(filteredResults);

    let featured = filteredResults.reduce((a, b) => {
      return new Date(a.fields.data) > new Date(b.fields.data) ? a : b;
    });
    setFeaturedArticle(featured);
  };

  return (
    <StoreContext.Provider
      value={{
        featuredArticle,
        getFeaturedArticle: getFeatured,
        articles,
        setSkip,
        setLimit,
        limit,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
