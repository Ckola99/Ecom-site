import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
		<div className="font-sans">
			<HomePage />
		</div>
  );
}

export default App
