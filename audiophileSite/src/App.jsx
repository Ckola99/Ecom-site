import { useState } from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import ScrollToTop from "./components/ScrollToTop";
import Earphones from './pages/Earphones';

function App() {

  return (
		<div className="">
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/headphones"
					element={<Headphones />}
				/>
				<Route path="/speakers" element={<Speakers />} />
				<Route path="/earphones" element={<Earphones />} />
			</Routes>
		</div>
  );
}

export default App
