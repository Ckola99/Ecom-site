import "../index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../components/Layout";
import ProductPage from "../pages/ProductPage";
import Checkout from "../pages/Checkout";
import CategoryPage from "../pages/CategoryPage";

function App() {
	return (
		<Router>
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
						<Route path="category/:category"
						element={<CategoryPage />}
					/>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
