import GlobalStyle from "./base-styles";
import { useStore } from "./contexts/Store";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PaginatedArticleList from "./components/Pagination/PaginatedArticleList";
import Featured from "./components/Cards/Featured";

function App() {
  const { featuredArticle, getFeaturedArticle } = useStore();

  // console.log("TODO: use the store to create the base UI", store);

  return (
    <>
      <GlobalStyle />
      <main className="App">
        <Header />
        {/* TODO: Blog things goes here. Use the components folder! */}
        <Container>
          {featuredArticle && <Featured />}
          <PaginatedArticleList />
        </Container>

        <Footer />
      </main>
    </>
  );
}

export default App;
