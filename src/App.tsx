import { Routes, Route } from 'react-router-dom';

import Header from './componets/Header';
import Home from './pages/Home';
import FullPizza from './pages/FullPizza';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

import './scss/app.scss';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" index element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/pizza/:id" element={<FullPizza />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
