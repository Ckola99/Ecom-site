import "../index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Headphones from "../pages/Headphones";
import Speakers from "../pages/Speakers";
import Earphones from "../pages/Earphones";
import Layout from "../components/Layout";
import ProductPage from "../pages/ProductPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route
						path="headphones"
						element={<Headphones />}
					/>
					<Route
						path="speakers"
						element={<Speakers />}
					/>
					<Route
						path="earphones"
						element={<Earphones />}
					/>
					<Route
						path="product/:productSlug"
						element={<ProductPage />}
					/>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
