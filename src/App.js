import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './components/Footer';
import ThemeSelection from './Pages/Theme';
import Products from './components/Products';
import Category from './components/Category';
import Chic from './Pages/Chic';
import Bag from './Pages/Bag';
import Flex from './Pages/Flex';
import Login from './Pages/login';

function App() {
    const handleThemeSelection = (theme) => {
        console.log(`Selected theme: ${theme}`);
    };

    return (
        <Router>
            <div className=" mt-5">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<ThemeSelection onSelectTheme={handleThemeSelection} />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/category" element={<Category />} />
                        <Route path="/chic" element={<Chic />} />
                        <Route path="/bag" element={<Bag />} />
                        <Route path="/flex" element={<Flex />} />
                    </Routes>
                </div>
                <Footer />
        </Router>
    );
}

export default App;
