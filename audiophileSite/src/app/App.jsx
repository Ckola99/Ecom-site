import "../index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import HomePage from "../pages/HomePage";
import Layout from "../components/Layout";
import ProductPage from "../pages/ProductPage";
import Checkout from "../pages/Checkout";
import CategoryPage from "../pages/CategoryPage";

function App() {
  return (
    <Router>
      <Helmet>
        <html lang="en" />
        <meta name="description" content="Audiophile e-commerce website" />
        <title>Audiophile | Home</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="product/:productSlug"
            element={<ProductPage />}
          />
          <Route
            path="checkout"
            element={<Checkout />}
          />
          <Route
            path="category/:category"
            element={<CategoryPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
